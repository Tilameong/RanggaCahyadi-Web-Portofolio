"use client";

import React from "react";
import { ArrowUp, Layers } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        background: "rgba(9, 13, 22, 0.98)",
        padding: "32px 0 24px",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "20px",
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #6366f1, #f97316)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Layers size={16} color="#ffffff" />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "#ffffff", fontSize: "0.95rem" }}>
                Rangga Cahyadi
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--indigo-light)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                IT Technical Support &bull; IT Administrator
              </div>
            </div>
          </div>

          {/* Clean Back to top */}
          <button
            onClick={scrollToTop}
            className="btn-ghost"
            style={{
              padding: "7px 14px",
              fontSize: "0.82rem",
              borderRadius: "6px",
            }}
          >
            <span>Kembali ke Atas</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Clean Copyright Line */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            paddingTop: "16px",
            textAlign: "center",
            fontSize: "0.8rem",
            color: "var(--text-dim)",
          }}
        >
          &copy; 2026 Rangga Cahyadi. Seluruh hak cipta dilindungi undang-undang.
        </div>
      </div>
    </footer>
  );
}
