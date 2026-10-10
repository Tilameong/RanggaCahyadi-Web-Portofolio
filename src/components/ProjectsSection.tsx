"use client";

import React from "react";
import { Layout, Server, Monitor, FileSpreadsheet, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function ProjectsSection() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  const projects = [
    {
      title:
        lang === "in"
          ? "UI/UX Website Redesign & Wireframing (Figma)"
          : "UI/UX Website Redesign & Interactive Wireframing (Figma)",
      category: "UI/UX Design",
      icon: <Layout size={20} color="#38bdf8" />,
      accent: "#38bdf8",
      description:
        lang === "in"
          ? "Perancangan antarmuka website berbasis Figma pada program magang Yayasan Edukasi Wakaf Indonesia. Menyusun wireframe, interaksi prototype, serta alur navigasi pengguna yang ringkas dan ramah pengguna."
          : "Design of interactive web user interfaces in Figma during the internship program at Yayasan Edukasi Wakaf Indonesia. Produced wireframes, user flow diagrams, and accessible prototypes.",
      points:
        lang === "in"
          ? [
              "Penyusunan arsitektur informasi dan user flow navigasi.",
              "Pembuatan high-fidelity prototype interaktif di Figma.",
              "Iterasi revisi desain berdasarkan evaluasi tim developer.",
            ]
          : [
              "Information architecture and user journey flow design.",
              "High-fidelity clickable prototype development in Figma.",
              "Design iteration based on frontend developer evaluation.",
            ],
      tags: ["Figma", "UI/UX Design", "Wireframe", "Prototype", "User Flow"],
    },
    {
      title:
        lang === "in"
          ? "Troubleshooting PC, Printer & Monitoring CCTV"
          : "PC, Printer Troubleshooting & CCTV Surveillance Setup",
      category: lang === "in" ? "IT Support & Maintenance" : "IT Support & Field Maintenance",
      icon: <Monitor size={20} color="var(--orange-accent)" />,
      accent: "var(--orange-accent)",
      description:
        lang === "in"
          ? "Prosedur penanganan insiden hardware dan periferal di lingkungan operasional kantor (SPPG Kebon Kangkung & CV. Cahaya Mandiri Gemilang) untuk meminimalisir waktu henti kerja (downtime)."
          : "Standard operational incident resolution protocols for computer workstations, Epson printers, and CCTV cameras to minimize operational downtime.",
      points:
        lang === "in"
          ? [
              "Pemeriksaan cepat kerusakan PC (RAM, storage, OS, driver).",
              "Perawatan printer dan konfigurasi shared printer kantor via LAN.",
              "Pengecekan live view dan kontinuitas penyimpanan rekaman CCTV.",
            ]
          : [
              "Rapid PC diagnostics (RAM, SSD, OS integrity, and official drivers).",
              "Printer maintenance and shared network printer configuration over LAN.",
              "PoE CCTV live view verification and surveillance storage continuity.",
            ],
      tags: ["Troubleshooting", "PC Hardware", "Printer Setup", "CCTV DVR/NVR"],
    },
    {
      title:
        lang === "in"
          ? "Desain Jaringan LAN & Segmentasi VLAN (Cisco)"
          : "LAN Network Architecture & VLAN Segmentation (Cisco)",
      category: lang === "in" ? "Jaringan & Keamanan" : "Networking & Security",
      icon: <Server size={20} color="var(--indigo-primary)" />,
      accent: "var(--indigo-primary)",
      description:
        lang === "in"
          ? "Simulasi dan konfigurasi jaringan skala kantor dengan pemisahan traffic VLAN (Manajemen & Tamu), konfigurasi routing switch, dan pengamanan akses port perangkat."
          : "Enterprise network design featuring VLAN segmentation (Management vs Guest), router/switch configuration, and device port security.",
      points:
        lang === "in"
          ? [
              "Segmentasi VLAN untuk isolasi keamanan data antar departemen.",
              "Konfigurasi router Cisco & MikroTik Winbox untuk manajemen IP.",
              "Testing verifikasi konektivitas dan kestabilan transmisi data.",
            ]
          : [
              "VLAN network segmentation for departmental security isolation.",
              "Cisco CLI and MikroTik Winbox routing & DHCP configuration.",
              "Data packet verification, ping latency, and transmission reliability tests.",
            ],
      tags: ["Cisco CCNA", "VLAN", "MikroTik", "Subnetting", "Packet Tracer"],
    },
    {
      title:
        lang === "in"
          ? "Otomatisasi Laporan & Administrasi Data (Excel)"
          : "Automated Executive Reporting & Data Management (Excel)",
      category: lang === "in" ? "Administrasi IT" : "IT Administration",
      icon: <FileSpreadsheet size={20} color="#34d399" />,
      accent: "#34d399",
      description:
        lang === "in"
          ? "Penyusunan laporan operasional terstruktur menggunakan Microsoft Excel tingkat lanjut untuk bahan tinjauan rapat mingguan (weekly meeting)."
          : "Structured data reporting and analytics using advanced Microsoft Excel functions for executive management reviews and audits.",
      points:
        lang === "in"
          ? [
              "Pengolahan rekapitulasi data dengan PivotTable & PivotChart.",
              "Penerapan formula logika HLOOKUP, VLOOKUP, dan validasi data.",
              "Pengarsipan dokumen digital aman di Microsoft OneDrive & Teams.",
            ]
          : [
              "Data aggregation and interactive summaries with PivotTable & PivotChart.",
              "HLOOKUP, VLOOKUP, and rigorous data validation formulas.",
              "Secure cloud document archiving using Microsoft OneDrive & Teams.",
            ],
      tags: ["Microsoft Excel", "PivotTable", "HLOOKUP", "OneDrive", "Weekly Meeting"],
    },
  ];

  return (
    <section
      id="portofolio"
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

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))",
            gap: "22px",
          }}
        >
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "26px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderTop: `3px solid ${proj.accent}`,
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "38px",
                      height: "38px",
                      borderRadius: "8px",
                      background: "rgba(255, 255, 255, 0.04)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    {proj.icon}
                  </div>
                  <div>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.74rem",
                        color: "var(--text-muted)",
                        textTransform: "uppercase",
                      }}
                    >
                      {proj.category}
                    </span>
                    <h3
                      style={{
                        fontSize: "1.08rem",
                        fontWeight: 700,
                        color: "#ffffff",
                        lineHeight: 1.3,
                      }}
                    >
                      {proj.title}
                    </h3>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "0.86rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                    marginBottom: "16px",
                  }}
                >
                  {proj.description}
                </p>

                {/* Point by Point */}
                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "18px" }}>
                  {proj.points.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        fontSize: "0.82rem",
                        color: "#cbd5e1",
                      }}
                    >
                      <span style={{ color: proj.accent, fontWeight: "bold" }}>&bull;</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  paddingTop: "12px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                {proj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tech-tag" style={{ fontSize: "0.72rem" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
