"use client";

import React, { useState, useEffect } from "react";
import { Layers } from "lucide-react";

export default function LoadingScreen() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(20);
  const [statusText, setStatusText] = useState("INITIALIZING SYSTEM...");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setMounted(true);

    const timer1 = setTimeout(() => {
      setProgress(60);
      setStatusText("LOADING ASSETS & ENVIRONMENT...");
    }, 250);

    const timer2 = setTimeout(() => {
      setProgress(95);
      setStatusText("VERIFYING SYSTEM PROTOCOLS...");
    }, 600);

    const timer3 = setTimeout(() => {
      setProgress(100);
      setStatusText("SYSTEM READY");
    }, 900);

    const timer4 = setTimeout(() => {
      setFadeOut(true);
    }, 1150);

    const timer5 = setTimeout(() => {
      setLoading(false);
    }, 1600);

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
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#090d16",
        zIndex: 999999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: fadeOut ? 0 : 1,
        visibility: fadeOut ? "hidden" : "visible",
        pointerEvents: fadeOut ? "none" : "auto",
        transition: "opacity 0.45s ease, visibility 0.45s ease",
      }}
      aria-hidden="true"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "24px",
          maxWidth: "340px",
          width: "90%",
        }}
      >
        {/* Animated Brand Logo Icon */}
        <div
          style={{
            position: "relative",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="preloader-spin-ring" />
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #6366f1, #f97316)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 10px 25px rgba(99, 102, 241, 0.45)",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Layers size={30} color="#ffffff" />
          </div>
        </div>

        {/* Brand Name & Title */}
        <div style={{ marginBottom: "22px" }}>
          <div
            style={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: "-0.02em",
              marginBottom: "3px",
            }}
          >
            Rangga Cahyadi
          </div>
          <div
            style={{
              fontSize: "0.72rem",
              fontFamily: "var(--font-mono)",
              color: "var(--indigo-light)",
              letterSpacing: "0.06em",
              fontWeight: 600,
            }}
          >
            IT SUPPORT &bull; ADMIN IT &bull; INFRASTRUCTURE
          </div>
        </div>

        {/* Tech Progress Bar Track */}
        <div
          style={{
            width: "100%",
            maxWidth: "260px",
            height: "4px",
            borderRadius: "9999px",
            background: "rgba(255, 255, 255, 0.08)",
            overflow: "hidden",
            marginBottom: "12px",
            border: "1px solid rgba(255, 255, 255, 0.05)",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "linear-gradient(90deg, #6366f1, #f97316)",
              borderRadius: "9999px",
              transition: "width 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              boxShadow: "0 0 10px rgba(99, 102, 241, 0.8)",
            }}
          />
        </div>

        {/* Live Status Monospace */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "var(--font-mono)",
            fontSize: "0.72rem",
            color: "var(--text-muted)",
            width: "100%",
            maxWidth: "260px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#10b981",
                display: "inline-block",
              }}
            />
            <span>{statusText}</span>
          </div>
          <span style={{ color: "var(--orange-light)", fontWeight: 700 }}>
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
