"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show auto tooltip on desktop screen (> 768px)
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    setIsVisible(true);

    if (!isMobile) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 2000);
      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 7000);
      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  const waUrl =
    "https://wa.me/6281539235487?text=Halo%20Rangga%20Cahyadi,%20saya%20melihat%20portofolio%20IT%20Anda%20dan%20ingin%20berdiskusi";

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}
    >
      {/* Tooltip Message Bubble */}
      {showTooltip && (
        <div
          style={{
            background: "rgba(15, 23, 42, 0.95)",
            border: "1px solid rgba(37, 211, 102, 0.4)",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.6), 0 0 15px rgba(37, 211, 102, 0.2)",
            borderRadius: "10px",
            padding: "8px 14px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backdropFilter: "blur(8px)",
            animation: "fadeInRight 0.3s ease-out",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 700,
                color: "#25D366",
                lineHeight: 1.2,
              }}
            >
              Ada yang ingin ditanyakan?
            </span>
            <span
              style={{
                fontSize: "0.74rem",
                color: "var(--text-secondary)",
              }}
            >
              Chat WhatsApp Rangga langsung
            </span>
          </div>

          <button
            onClick={() => setShowTooltip(false)}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--text-muted)",
              cursor: "pointer",
              padding: "2px",
              display: "flex",
              alignItems: "center",
            }}
            aria-label="Tutup tooltip"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Floating Action WhatsApp Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Rangga Cahyadi"
        onMouseEnter={() => setShowTooltip(true)}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          boxShadow:
            "0 6px 20px rgba(37, 211, 102, 0.45), 0 0 15px rgba(18, 140, 126, 0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
          textDecoration: "none",
          transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
          position: "relative",
          cursor: "pointer",
        }}
        className="wa-floating-btn"
      >
        {/* Pulsing Outer Ring */}
        <span
          style={{
            position: "absolute",
            inset: "-4px",
            borderRadius: "50%",
            border: "2px solid #25D366",
            opacity: 0.75,
            animation: "waPulse 2s infinite",
            pointerEvents: "none",
          }}
        />

        <MessageCircle size={28} color="#ffffff" style={{ fill: "#ffffff" }} />
      </a>

      <style jsx global>{`
        @keyframes waPulse {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.25);
            opacity: 0;
          }
          100% {
            transform: scale(1.25);
            opacity: 0;
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .wa-floating-btn:hover {
          transform: scale(1.08) translateY(-2px);
          box-shadow: 0 10px 28px rgba(37, 211, 102, 0.6), 0 0 20px rgba(37, 211, 102, 0.4) !important;
        }
        @media (max-width: 600px) {
          .wa-floating-btn {
            width: 50px !important;
            height: 50px !important;
          }
        }
      `}</style>
    </div>
  );
}
