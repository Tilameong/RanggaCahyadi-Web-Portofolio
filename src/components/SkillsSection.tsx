"use client";

import React from "react";
import {
  Wrench,
  CheckCircle,
  Globe,
  HeartHandshake,
  Cpu,
  Layers,
  Code2,
  Network,
  Printer,
  FileSpreadsheet,
  Palette,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function SkillsSection() {
  const { lang } = useLanguage();
  const t = translations[lang].skills;
  const hardSkills = [
    {
      name: "PC, Printer & CCTV Troubleshooting",
      desc: "Diagnosis perangkat komputer, printer, dan kamera pengawas.",
      tag: "Hardware Support",
      icon: <Wrench size={18} color="var(--orange-light)" />,
    },
    {
      name: "Hardware & Software Maintenance",
      desc: "Pemeliharaan preventif perangkat keras dan optimasi perangkat lunak.",
      tag: "Maintenance",
      icon: <Cpu size={18} color="var(--orange-light)" />,
    },
    {
      name: "Basic Networking (LAN, WLAN, VLAN)",
      desc: "Perancangan kabel UTP, segmentasi VLAN, dan konfigurasi access point.",
      tag: "Networking",
      icon: <Network size={18} color="var(--indigo-light)" />,
    },
    {
      name: "Cisco & MikroTik Networking",
      desc: "Konfigurasi routing, switching Cisco, dan manajemen Winbox MikroTik.",
      tag: "Cisco / MikroTik",
      icon: <Network size={18} color="var(--indigo-light)" />,
    },
    {
      name: "Instalasi Driver & Software",
      desc: "Setup sistem operasi (OS Windows), driver resmi, dan lisensi kerja.",
      tag: "OS & Deployment",
      icon: <CheckCircle size={18} color="var(--orange-light)" />,
    },
    {
      name: "HTML, CSS, JavaScript, SQL, C#",
      desc: "Dasar pemrograman web, query basis data terstruktur, dan logika C#.",
      tag: "Programming",
      icon: <Code2 size={18} color="#38bdf8" />,
    },
    {
      name: "Microsoft Office (Word, Excel, PowerPoint)",
      desc: "Pengolahan data Excel (PivotTable & HLOOKUP) dan dokumen formal.",
      tag: "Office Suite",
      icon: <FileSpreadsheet size={18} color="#34d399" />,
    },
    {
      name: "Microsoft Teams & OneDrive",
      desc: "Manajemen berkas digital terpusat dan kolaborasi rapat virtual.",
      tag: "Cloud & Archiving",
      icon: <Layers size={18} color="#34d399" />,
    },
    {
      name: "Canva & Figma",
      desc: "Desain UI/UX wireframe/prototipe di Figma & materi publikasi di Canva.",
      tag: "UI/UX & Design",
      icon: <Palette size={18} color="#c084fc" />,
    },
  ];

  const softSkills = [
    {
      name: "Problem Solving & Analytical Thinking",
      desc: "Menganalisis akar masalah teknis secara logis dan menghadirkan solusi yang cepat serta tepat sasaran.",
    },
    {
      name: "Communication & Team Collaboration",
      desc: "Mampu menyampaikan penjelasan teknis secara komunikatif kepada pengguna serta berkoordinasi aktif dalam tim.",
    },
    {
      name: "Fast Learning & Adaptability",
      desc: "Cepat beradaptasi dengan lingkungan kerja baru, SOP operasional, serta perkembangan teknologi terkini.",
    },
  ];

  const languageSkills = [
    {
      name: "Bahasa Indonesia",
      level: "Native",
      desc: "Penutur asli, komunikasi formal lisan maupun tulisan.",
      color: "#34d399",
    },
    {
      name: "Bahasa Inggris",
      level: "TOEIC 670",
      desc: "Pemahaman literatur teknis internasional, dokumentasi, dan komunikasi kerja profesional.",
      color: "var(--orange-light)",
    },
    {
      name: "Bahasa Mandarin",
      level: "Basic (Self-Learning)",
      desc: "Kosakata dasar dan percakapan pengantar sehari-hari.",
      color: "var(--indigo-light)",
    },
  ];

  return (
    <section
      id="keahlian"
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
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "6px" }}>
            {t.subtitle}
          </p>
        </div>

        {/* 3 Categories Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 0.9fr",
            gap: "28px",
            alignItems: "start",
          }}
          className="skills-main-grid"
        >
          {/* Column 1: Hard Skills (9 Points) */}
          <div
            className="glass-card"
            style={{
              padding: "28px",
              borderTop: "3px solid var(--orange-accent)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
                paddingBottom: "14px",
                borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(249, 115, 22, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Wrench size={18} color="var(--orange-light)" />
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff" }}>
                  {t.hardSkillsTitle}
                </h3>
              </div>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.78rem",
                  color: "var(--orange-light)",
                }}
              >
                {lang === "in" ? "9 Kompetensi" : "9 Competencies"}
              </span>
            </div>

            {/* List of 9 Hard Skills */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {hardSkills.map((hs, i) => (
                <div
                  key={i}
                  style={{
                    padding: "12px 14px",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <div style={{ marginTop: "2px" }}>{hs.icon}</div>
                    <div>
                      <div style={{ fontWeight: 600, color: "#f8fafc", fontSize: "0.92rem" }}>
                        {hs.name}
                      </div>
                      <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "2px" }}>
                        {hs.desc}
                      </div>
                    </div>
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      background: "rgba(255, 255, 255, 0.05)",
                      color: "var(--text-secondary)",
                      border: "1px solid var(--border-subtle)",
                      flexShrink: 0,
                    }}
                  >
                    {hs.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Soft Skills & Language Skills */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Soft Skill Card */}
            <div
              className="glass-card"
              style={{
                padding: "24px",
                borderTop: "3px solid var(--indigo-primary)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                  paddingBottom: "12px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(99, 102, 241, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <HeartHandshake size={18} color="var(--indigo-light)" />
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff" }}>
                  {t.softSkillsTitle}
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {softSkills.map((ss, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "12px 14px",
                      borderRadius: "8px",
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                        color: "#ffffff",
                        marginBottom: "4px",
                      }}
                    >
                      <CheckCircle size={15} color="var(--indigo-light)" style={{ flexShrink: 0 }} />
                      <span>{ss.name}</span>
                    </div>
                    <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.5, paddingLeft: "23px" }}>
                      {ss.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Language Skill Card */}
            <div
              className="glass-card"
              style={{
                padding: "24px",
                borderTop: "3px solid #34d399",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                  paddingBottom: "12px",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(16, 185, 129, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Globe size={18} color="#34d399" />
                </div>
                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff" }}>
                  Language Skill
                </h3>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {languageSkills.map((lang, lIdx) => (
                  <div
                    key={lIdx}
                    style={{
                      padding: "12px 14px",
                      borderRadius: "8px",
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid var(--border-subtle)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "10px",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, color: "#ffffff", fontSize: "0.9rem" }}>
                        {lang.name}
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                        {lang.desc}
                      </div>
                    </div>

                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: "6px",
                        background: "rgba(255, 255, 255, 0.05)",
                        color: lang.color,
                        border: `1px solid ${lang.color}44`,
                        flexShrink: 0,
                      }}
                    >
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .skills-main-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
