import type { Project } from '@/models/project';
import { languageService } from '@/services/language.instance';

export const getProjects = (): Project[] => {
  const lang = languageService.getLanguage();

  return [
    {
      title: 'Westcoast Education',
      description:
        lang === 'en'
          ? 'A course platform where users can browse courses, view details and book them as classroom or remote sessions. Features an account system with login and bookings, and an admin panel for managing courses.'
          : 'En kursplattform där användare kan bläddra bland kurser, se detaljer och boka dem som fysiska eller virtuella sessioner. Har ett kontosystem med inloggning och bokningar, samt en adminpanel för att hantera kurser.',
      tags: ['TypeScript', 'HTML', 'CSS', 'Vanilla JS', 'JSON-Server', 'Vitest'],
      imageSrc: '/images/westcoast-education.png',
      imageAlt: 'Westcoast Education homepage',
      repoUrl: 'https://github.com/silvergin7/westcoast-education',
    },
    {
      title: 'FitTrack BMI Calculator',
      description:
        lang === 'en'
          ? 'A fitness web app with a landing page, login/register flow, and a BMI calculator that computes BMI from height and weight, displays the category with a visual scale, and lets users save results locally. Includes a contact form.'
          : 'En fitnesswebbapp med startsida, inloggning/registrering och en BMI-kalkylator som beräknar BMI från längd och vikt, visar kategori med en visuell skala och låter användare spara resultat lokalt. Inkluderar ett kontaktformulär.',
      tags: ['HTML', 'CSS', 'Vanilla JS', 'TypeScript', 'Vitest'],
      imageSrc: '/images/bmi-calculator.png',
      imageAlt: 'FitTrack BMI Calculator page',
      repoUrl: 'https://github.com/silvergin7/BMI-calculator',
    },
    {
      title: 'Block Inspector',
      description:
        lang === 'en'
          ? 'A simple dApp for basic Ethereum inspection in the browser. Users can view the current block height on the Sepolia network, look up any address balance, and send transactions via MetaMask. Uses Infura for chain data and Viem for Ethereum client functions.'
          : 'En enkel dApp för grundläggande Ethereum-inspektion i webbläsaren. Användaren kan se aktuell blockhöjd på Sepolia-nätverket, söka upp saldot för valfri adress och skicka transaktioner via MetaMask. Använder Infura för kedjedata och Viem för Ethereum-klientfunktioner.',
      tags: ['TypeScript', 'Vite', 'Viem', 'MetaMask', 'Vitest'],
      imageSrc: '/images/block-inspector.png',
      imageAlt: 'Block Inspector dApp interface',
      repoUrl: 'https://github.com/silvergin7/block-inspector',
    },
    {
      title: 'The Distributed Ledger',
      description:
        lang === 'en'
          ? 'A static Solana portfolio dashboard built entirely without JavaScript. Features market data, staking overview, governance proposals with voting, and token transfer forms — all crafted with pure HTML and CSS including inline SVG charts.'
          : 'En statisk Solana-portfoliodashboard byggd helt utan JavaScript. Visar marknadsdata, staking-översikt, governance-förslag med röstning och token-överföringsformulär — allt skapat med ren HTML och CSS inklusive inline SVG-diagram.',
      tags: ['HTML', 'CSS'],
      imageSrc: '/images/the-distributed-ledger.png',
      imageAlt: 'The Distributed Ledger dashboard',
      repoUrl: 'https://github.com/silvergin7/the-distributed-ledger',
    },
    {
      title: 'Member Rewards',
      description:
        lang === 'en'
          ? 'A Solidity smart contract built with Foundry that simulates a member loyalty system. Members can earn daily points with a 24-hour cooldown, transfer points, and redeem rewards. Admins can assign points, update reward costs on-chain, terminate memberships, and revoke VIP status.'
          : 'Ett Solidity-smartkontrakt byggt med Foundry som simulerar ett lojalitetssystem. Medlemmar kan tjäna dagliga poäng med 24-timmars cooldown, överföra poäng och lösa in belöningar. Admins kan tilldela poäng, uppdatera belöningskostnader on-chain, avsluta medlemskap och återkalla VIP-status.',
      tags: ['Solidity', 'Foundry', 'Forge'],
      repoUrl: 'https://github.com/silvergin7/Member-Rewards',
    },
  ];
};
