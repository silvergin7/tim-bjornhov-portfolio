export const setupMusicPlayer = (): void => {
  const player = document.querySelector(
    '[data-music-player]',
  ) as HTMLDivElement | null;

  const audio = document.querySelector(
    '[data-music-audio]',
  ) as HTMLAudioElement | null;

  const toggleButton = document.querySelector(
    '[data-music-toggle]',
  ) as HTMLButtonElement | null;

  const stopButton = document.querySelector(
    '[data-music-stop]',
  ) as HTMLButtonElement | null;

  const volumeInput = document.querySelector(
    '[data-music-volume]',
  ) as HTMLInputElement | null;

  if (!player || !audio || !toggleButton || !stopButton || !volumeInput) {
    return;
  }

  const updateToggleButton = (): void => {
    toggleButton.textContent = audio.paused ? '▶' : '⏸';
    toggleButton.setAttribute(
      'aria-label',
      audio.paused ? 'Play music' : 'Pause music',
    );
  };

  window.addEventListener('start-music-playback', async () => {
    audio.volume = Number(volumeInput.value);
    player.hidden = false;

    try {
      await audio.play();
      updateToggleButton();
    } catch {
      updateToggleButton();
    }
  });

  toggleButton.addEventListener('click', async () => {
    if (audio.paused) {
      try {
        await audio.play();
      } catch {}
    } else {
      audio.pause();
    }

    updateToggleButton();
  });

  stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    player.hidden = true;
    updateToggleButton();
  });

  volumeInput.addEventListener('input', () => {
    audio.volume = Number(volumeInput.value);
  });

  audio.addEventListener('ended', () => {
    audio.currentTime = 0;
    player.hidden = true;
    updateToggleButton();
  });

  updateToggleButton();
};
