export const createMusicPlayer = (): string => {
  return `
      <div class="music-player" data-music-player hidden>
        <button
          type="button"
          class="music-player__control"
          aria-label="Pause music"
          data-music-toggle
        >
          ⏸
        </button>
  
        <label class="music-player__volume-label" for="music-volume">
          <span class="sr-only">Volume</span>
          <input
            id="music-volume"
            class="music-player__volume"
            type="range"
            min="0"
            max="1"
            step="0.05"
            value="0.1"
            data-music-volume
          />
        </label>
  
        <button
          type="button"
          class="music-player__control"
          aria-label="Close music player"
          data-music-stop
        >
          ✕
        </button>
  
      </div>
    `;
};
