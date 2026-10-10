"use client";

import React from "react";
import { Terminal, Heart, Shield, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(139, 92, 246, 0.2)",
        background: "rgba(5, 6, 12, 0.95)",
        padding: "40px 0 30px",
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
            gap: "20px",
            marginBottom: "24px",
          }}
        >
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #8b5cf6, #f97316)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Terminal size={18} color="#ffffff" />
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "#fff", fontSize: "1rem" }}>
                Rangga Cahyadi
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--purple-400)",
                  fontFamily: "var(--font-mono)",
                }}
              >
                IT Support &amp; IT Administration Portfolio
              </div>
            </div>
          </div>

          {/* Quick Info & Tech Stack */}
          <div
            style={{
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              textAlign: "center",
            }}
          >
            Dibangun dengan <strong style={{ color: "#fff" }}>Next.js</strong> &bull;{" "}
            <span style={{ color: "var(--purple-400)" }}>Cyber Dark &bull; Neon Purple &bull; Orange Accent</span>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="btn-ghost"
            style={{ padding: "8px 14px", borderRadius: "8px" }}
          >
            <span>Kembali ke Atas</span>
            <ArrowUp size={16} />
          </button>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            paddingTop: "20px",
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
