"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Volume2, VolumeOff } from "lucide-react";

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState<boolean | null>(null);
  const [fadeOut, setFadeOut] = useState(false);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const seen = sessionStorage.getItem("sero-splash-seen");
    setVisible(!seen);
  }, []);

  const dismiss = useCallback(() => {
    setFadeOut(true);
    sessionStorage.setItem("sero-splash-seen", "1");
    setTimeout(() => setVisible(false), 600);
  }, []);

  const handleVideoEnd = useCallback(() => {
    dismiss();
  }, [dismiss]);

  const toggleMute = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  }, []);

  // Don't render anything until we know if splash should show (avoids flash)
  if (visible === null) {
    return (
      <div className="fixed inset-0 z-[9999] bg-sero-dark" aria-hidden />
    );
  }

  if (!visible) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Main content hidden behind splash */}
      <div className="invisible">{children}</div>

      {/* Splash overlay */}
      <div
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-sero-dark transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <video
          ref={videoRef}
          src="/Sero_video_opening.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="h-full w-full object-contain"
        />

        <div className="absolute bottom-8 right-8 flex items-center gap-4">
          <button
            onClick={toggleMute}
            className="text-white/60 hover:text-white transition-colors"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <VolumeOff className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
          </button>
          <button
            onClick={dismiss}
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            Skip
          </button>
        </div>
      </div>
    </>
  );
}
