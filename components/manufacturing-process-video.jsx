"use client";

import { useRef, useState } from "react";

export function ManufacturingProcessVideo() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.7);

  function keepVideoPlaying() {
    const video = videoRef.current;

    if (video && video.paused) {
      video.play().catch(() => {});
    }
  }

  function toggleSound() {
    const video = videoRef.current;

    if (!video) return;

    const nextMutedState = !video.muted;

    video.muted = nextMutedState;
    video.volume = volume;

    setIsMuted(nextMutedState);

    video.play().catch(() => {});
  }

  function handleVolumeChange(event) {
    const video = videoRef.current;
    const nextVolume = Number(event.target.value);

    setVolume(nextVolume);

    if (!video) return;

    video.volume = nextVolume;
    video.muted = nextVolume === 0;

    setIsMuted(nextVolume === 0);

    video.play().catch(() => {});
  }

  return (
    <div className="relative h-[560px] overflow-hidden rounded-[28px] bg-black sm:h-[430px] lg:h-[500px]">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onPause={keepVideoPlaying}
        className="h-full w-full object-cover"
      >
        <source src="/video/vid1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Video information */}
      <div className="pointer-events-none absolute bottom-4 left-4 hidden sm:block">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">
          Power Electrode Ltd
        </p>

        <p className="mt-1 text-sm font-medium text-white/80">
          Welding electrode manufacturing process
        </p>
      </div>

      {/* Volume control */}
      <div className="absolute bottom-4 right-4 flex items-center gap-3 rounded-full border border-white/20 bg-black/50 px-3 py-2 text-white backdrop-blur-md">
        <button
          type="button"
          onClick={toggleSound}
          className="flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-white/15"
          aria-label={isMuted ? "Turn sound on" : "Mute video"}
        >
          {isMuted ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                d="M5 9v6h4l5 4V5L9 9H5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              <path
                d="m18 9 4 4m0-4-4 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                d="M5 9v6h4l5 4V5L9 9H5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              <path
                d="M17 9.5c1.2 1.4 1.2 3.6 0 5M19.5 7c2.6 2.8 2.6 7.2 0 10"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          aria-label="Video volume"
          className="h-1 w-20 cursor-pointer accent-orange-500 sm:w-24"
        />
      </div>
    </div>
  );
}
