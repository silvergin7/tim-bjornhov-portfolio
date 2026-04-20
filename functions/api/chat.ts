import { getSystemPrompt } from './system-prompt';

interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
}

interface ChatRequest {
  messages: ChatMessage[];
  lang: string;
}

interface Env {
  AI: Ai;
}

const ALLOWED_ORIGINS = new Set([
  'https://timbjornhov.com',
  'https://www.timbjornhov.com',
  'https://tim-bjornhov-portfolio.pages.dev',
  'http://localhost:3000',
  'http://localhost:8788',
]);

const buildCorsHeaders = (request: Request): Record<string, string> => {
  const origin = request.headers.get('Origin') ?? '';
  const headers: Record<string, string> = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
  if (ALLOWED_ORIGINS.has(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return headers;
};

export const onRequestOptions: PagesFunction<Env> = async (context) => {
  return new Response(null, { status: 204, headers: buildCorsHeaders(context.request) });
};

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const corsHeaders = buildCorsHeaders(context.request);

  try {
    const { messages, lang } = (await context.request.json()) as ChatRequest;

    if (!messages?.length) {
      return new Response(JSON.stringify({ error: 'No messages provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', ...corsHeaders },
      });
    }

    const systemPrompt = getSystemPrompt(lang ?? 'en');

    const aiMessages = [
      { role: 'system' as const, content: systemPrompt },
      ...messages.map((m) => ({
        role: (m.role === 'bot' ? 'assistant' : 'user') as 'assistant' | 'user',
        content: m.text,
      })),
    ];

    const stream = await context.env.AI.run('@cf/meta/llama-3.3-70b-instruct-fp8-fast', {
      messages: aiMessages,
      stream: true,
      max_tokens: 1024,
    });

    return new Response(stream as ReadableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        ...corsHeaders,
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json', ...corsHeaders },
    });
  }
};
