"use client";

import React from "react";
import TerminalWidget from "./TerminalWidget";
import { GraduationCap, Award, ShieldCheck, Wrench, CheckCircle2 } from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function AboutSection() {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <section
      id="pendidikan"
      style={{
        padding: "70px 0",
        position: "relative",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ marginBottom: "36px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "4px 10px",
              borderRadius: "6px",
              background: "rgba(99, 102, 241, 0.1)",
              border: "1px solid rgba(99, 102, 241, 0.25)",
              color: "var(--indigo-light)",
              fontSize: "0.78rem",
              fontFamily: "var(--font-mono)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "8px",
            }}
          >
            {t.tag}
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            {t.title}
          </h2>
        </div>

        {/* 2-Column: Education Card + Tech Console */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "28px",
            alignItems: "start",
          }}
          className="edu-grid"
        >
          {/* Left Column: Education Card */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div
              className="glass-card"
              style={{
                padding: "28px",
                borderLeft: "4px solid var(--indigo-primary)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  marginBottom: "16px",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    background: "rgba(99, 102, 241, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <GraduationCap size={26} color="var(--indigo-light)" />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.8rem",
                      color: "var(--orange-light)",
                      marginBottom: "2px",
                    }}
                  >
                    {t.period}
                  </div>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff" }}>
                    {t.institution}
                  </h3>
                  <div style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginTop: "2px" }}>
                    {t.location}
                  </div>
                </div>
              </div>

              <div
                style={{
                  padding: "12px 16px",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "8px",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{t.majorLabel} </span>
                  <strong style={{ color: "#ffffff", fontSize: "0.92rem" }}>{t.major}</strong>
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(16, 185, 129, 0.12)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#34d399",
                  }}
                >
                  <CheckCircle2 size={14} />
                  {t.status}
                </div>
              </div>

              <div style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                {t.curriculum}
              </div>
            </div>

            {/* Core Focus Areas */}
            <div
              className="glass-card"
              style={{
                padding: "20px 24px",
                borderLeft: "4px solid var(--orange-accent)",
              }}
            >
              <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
                {t.careerFocusTitle}
              </h4>
              <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                {t.careerFocusDesc}
              </p>
            </div>
          </div>

          {/* Right Column: Clean Interactive Console */}
          <div>
            <TerminalWidget />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .edu-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
