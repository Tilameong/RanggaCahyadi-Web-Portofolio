"use client";

import React, { useState, useEffect } from "react";
import { Layers } from "lucide-react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(15);
  const [statusText, setStatusText] = useState("INITIALIZING SYSTEM...");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Stage 1: Progress step
    const timer1 = setTimeout(() => {
      setProgress(55);
      setStatusText("LOADING ASSETS & ENVIRONMENT...");
    }, 300);

    // Stage 2: Near completion
    const timer2 = setTimeout(() => {
      setProgress(90);
      setStatusText("VERIFYING SYSTEM PROTOCOLS...");
    }, 700);

    // Stage 3: Ready
    const timer3 = setTimeout(() => {
      setProgress(100);
      setStatusText("SYSTEM READY");
    }, 1050);

    // Stage 4: Trigger fade out
    const timer4 = setTimeout(() => {
      setFadeOut(true);
    }, 1250);

    // Stage 5: Unmount loading screen
    const timer5 = setTimeout(() => {
      setLoading(false);
    }, 1750);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`preloader-overlay ${fadeOut ? "preloader-fadeout" : ""}`}
      aria-hidden="true"
    >
      <div className="preloader-content">
        {/* Animated Brand Logo */}
        <div className="preloader-logo-ring">
          <div className="preloader-logo-box">
            <Layers size={36} color="#ffffff" className="preloader-icon" />
          </div>
        </div>

        {/* Brand Name & Title */}
        <div className="preloader-text-group">
          <div className="preloader-name">Rangga Cahyadi</div>
          <div className="preloader-role">IT SUPPORT &bull; ADMIN IT &bull; INFRASTRUCTURE</div>
        </div>

        {/* Tech Progress Bar */}
        <div className="preloader-bar-track">
          <div
            className="preloader-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Live Status Monospace */}
        <div className="preloader-status">
          <span className="preloader-dot" />
          <span>{statusText}</span>
          <span className="preloader-percent">{progress}%</span>
        </div>
      </div>

      <style jsx>{`
        .preloader-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: #090d16;
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 1;
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1),
            visibility 0.5s ease;
          overflow: hidden;
          pointer-events: all;
        }

        .preloader-fadeout {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        .preloader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 24px;
          max-width: 360px;
          width: 90%;
        }

        .preloader-logo-ring {
          position: relative;
          margin-bottom: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .preloader-logo-ring::before {
          content: "";
          position: absolute;
          width: 84px;
          height: 84px;
          border-radius: 24px;
          border: 1.5px dashed rgba(99, 102, 241, 0.4);
          animation: spin 6s linear infinite;
        }

        .preloader-logo-ring::after {
          content: "";
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(99, 102, 241, 0.25) 0%,
            transparent 70%
          );
          filter: blur(8px);
        }

        .preloader-logo-box {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          background: linear-gradient(135deg, #6366f1, #f97316);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.5);
          animation: pulseScale 2s ease-in-out infinite;
          position: relative;
          z-index: 1;
        }

        .preloader-name {
          font-size: 1.4rem;
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
          margin-bottom: 4px;
        }

        .preloader-role {
          font-size: 0.72rem;
          font-family: var(--font-mono);
          color: var(--indigo-light);
          letter-spacing: 0.08em;
          margin-bottom: 26px;
          font-weight: 600;
        }

        .preloader-bar-track {
          width: 100%;
          max-width: 280px;
          height: 4px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.08);
          overflow: hidden;
          margin-bottom: 12px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .preloader-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #6366f1, #f97316);
          border-radius: 9999px;
          transition: width 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.8);
        }

        .preloader-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 0.72rem;
          color: var(--text-muted);
          width: 100%;
          max-width: 280px;
          justify-content: space-between;
        }

        .preloader-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          display: inline-block;
          animation: blink 1s ease infinite;
        }

        .preloader-percent {
          color: var(--orange-light);
          font-weight: 700;
        }

        @keyframes spin {
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes pulseScale {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
    </div>
  );
}
