const audio = new Audio('/audio/moment-of-truth.mp3');
let controller: AbortController | null = null;

export const setupMusicPlayer = (): void => {
  if (controller) {
    controller.abort();
  }
  controller = new AbortController();
  const { signal } = controller;

  const player = document.querySelector(
    '[data-music-player]',
  ) as HTMLDivElement | null;

  const toggleButton = document.querySelector(
    '[data-music-toggle]',
  ) as HTMLButtonElement | null;

  const stopButton = document.querySelector(
    '[data-music-stop]',
  ) as HTMLButtonElement | null;

  const volumeInput = document.querySelector(
    '[data-music-volume]',
  ) as HTMLInputElement | null;

  if (!player || !toggleButton || !stopButton || !volumeInput) {
    return;
  }

  if (!audio.paused) {
    player.hidden = false;
  }

  const updateToggleButton = (): void => {
    toggleButton.textContent = audio.paused ? '▶' : '⏸';
    toggleButton.setAttribute(
      'aria-label',
      audio.paused ? 'Play music' : 'Pause music',
    );
  };

  window.addEventListener('start-music-playback', async () => {
    if (!audio.paused) return;

    audio.volume = Number(volumeInput.value);
    player.hidden = false;

    try {
      await audio.play();
      updateToggleButton();
    } catch {
      updateToggleButton();
    }
  }, { signal });

  toggleButton.addEventListener('click', async () => {
    if (audio.paused) {
      try {
        await audio.play();
      } catch {}
    } else {
      audio.pause();
    }

    updateToggleButton();
  }, { signal });

  stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    player.hidden = true;
    updateToggleButton();
  }, { signal });

  volumeInput.addEventListener('input', () => {
    audio.volume = Number(volumeInput.value);
  }, { signal });

  audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    const currentPlayer = document.querySelector(
      '[data-music-player]',
    ) as HTMLDivElement | null;
    if (currentPlayer) currentPlayer.hidden = true;
    updateToggleButton();
  }, { signal });

  updateToggleButton();
};
