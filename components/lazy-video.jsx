"use client";

import { useEffect, useRef, useState } from "react";

export function LazyVideo({ src, poster, className, ariaLabel }) {
  const containerRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "250px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0">
      <video
        autoPlay={shouldLoad}
        muted
        loop
        playsInline
        preload={shouldLoad ? "metadata" : "none"}
        poster={poster}
        className={className}
        aria-label={ariaLabel}
      >
        {shouldLoad && <source src={src} type="video/mp4" />}
      </video>
    </div>
  );
}
