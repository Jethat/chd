
"use client";

import { useEffect, useRef, useState } from "react";

interface HeroVideoProps {
  title?: string;
  videoSrc?: string;
  poster?: string;
}

export default function HeroVideo({
  title = "Dedicated to the Promotion and Propagation of Hindi",
  videoSrc = "/videos/hero.mp4",
  poster = "/images/hero-poster.jpg",
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(() => {
    if (typeof window !== "undefined") {
      return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return true;
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (mediaQuery.matches) {
      video.pause();
    }

    const handleMotionPreference = (event: MediaQueryListEvent) => {
      if (event.matches) {
        video.pause();
        setIsPlaying(false);
      }
    };

    mediaQuery.addEventListener("change", handleMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  const togglePlayback = async () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const updateProgress = () => {
    const video = videoRef.current;

    if (video && Number.isFinite(video.duration) && video.duration > 0) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  return (
    <section
      className="relative isolate h-[60vh] min-h-[380px] w-full overflow-hidden bg-brand-darker md:h-[75vh]"
      aria-label="Central Hindi Directorate introduction"
    >
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={videoSrc}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={updateProgress}
        aria-hidden="true"
        disablePictureInPicture
      />

      {/* Contrast overlay for the light video */}
      <div
        className="absolute inset-0 bg-black/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/25 to-black/60"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"
        aria-hidden="true"
      />

      {/* Heading and CTA */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-5 pb-12 text-center text-white">
        <h1 className="max-w-5xl text-3xl font-bold leading-tight tracking-tight [text-shadow:0_3px_14px_rgba(0,0,0,0.95)] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
          {title}
        </h1>

        <a
          href="/about"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-brand px-7 py-3 text-sm font-semibold text-white shadow-lg transition duration-200 hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          Know More
        </a>
      </div>

      {/* Bottom-center playback controls */}
      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/20 bg-black/45 px-4 py-2.5 text-white shadow-lg backdrop-blur-md">
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
          aria-pressed={!isPlaying}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          {isPlaying ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M7 4.8a1 1 0 0 1 1.5-.86l11 6.35a2 2 0 0 1 0 3.46l-11 6.35A1 1 0 0 1 7 19.24z" />
            </svg>
          )}
        </button>

        <div className="flex w-24 flex-col gap-1 sm:w-36">
          <div
            className="h-1 overflow-hidden rounded-full bg-white/30"
            role="progressbar"
            aria-label="Video playback progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
          >
            <div
              className="h-full rounded-full bg-white transition-[width] duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
