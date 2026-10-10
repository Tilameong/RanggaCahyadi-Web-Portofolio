"use client";

import React from "react";
import { Layout, Server, Monitor, FileSpreadsheet, Check } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "UI/UX Website Redesign & Wireframing (Figma)",
      category: "UI/UX Design",
      icon: <Layout size={20} color="#38bdf8" />,
      accent: "#38bdf8",
      description:
        "Perancangan antarmuka website berbasis Figma pada program magang Yayasan Edukasi Wakaf Indonesia. Menyusun wireframe, interaksi prototype, serta alur navigasi pengguna yang ringkas dan ramah pengguna.",
      points: [
        "Penyusunan arsitektur informasi dan user flow navigasi.",
        "Pembuatan high-fidelity prototype interaktif di Figma.",
        "Iterasi revisi desain berdasarkan evaluasi tim developer.",
      ],
      tags: ["Figma", "UI/UX Design", "Wireframe", "Prototype", "User Flow"],
    },
    {
      title: "Troubleshooting PC, Printer & Monitoring CCTV",
      category: "IT Support & Maintenance",
      icon: <Monitor size={20} color="var(--orange-accent)" />,
      accent: "var(--orange-accent)",
      description:
        "Prosedur penanganan insiden hardware dan periferal di lingkungan operasional kantor (SPPG Kebon Kangkung & CV. Cahaya Mandiri Gemilang) untuk meminimalisir waktu henti kerja (downtime).",
      points: [
        "Pemeriksaan cepat kerusakan PC (RAM, storage, OS, driver).",
        "Perawatan printer dan konfigurasi shared printer kantor via LAN.",
        "Pengecekan live view dan kontinuitas penyimpanan rekaman CCTV.",
      ],
      tags: ["Troubleshooting", "PC Hardware", "Printer Setup", "CCTV DVR/NVR"],
    },
    {
      title: "Desain Jaringan LAN & Segmentasi VLAN (Cisco)",
      category: "Networking & Security",
      icon: <Server size={20} color="var(--indigo-primary)" />,
      accent: "var(--indigo-primary)",
      description:
        "Simulasi dan konfigurasi jaringan skala kantor dengan pemisahan traffic VLAN (Manajemen & Tamu), konfigurasi routing switch, dan pengamanan akses port perangkat.",
      points: [
        "Segmentasi VLAN untuk isolasi keamanan data antar departemen.",
        "Konfigurasi router Cisco & MikroTik Winbox untuk manajemen IP.",
        "Testing verifikasi konektivitas dan kestabilan transmisi data.",
      ],
      tags: ["Cisco CCNA", "VLAN", "MikroTik", "Subnetting", "Packet Tracer"],
    },
    {
      title: "Otomatisasi Laporan & Administrasi Data (Excel)",
      category: "IT Administration",
      icon: <FileSpreadsheet size={20} color="#34d399" />,
      accent: "#34d399",
      description:
        "Penyusunan laporan operasional terstruktur menggunakan Microsoft Excel tingkat lanjut untuk bahan tinjauan rapat mingguan (weekly meeting).",
      points: [
        "Pengolahan rekapitulasi data dengan PivotTable & PivotChart.",
        "Penerapan formula logika HLOOKUP, VLOOKUP, dan validasi data.",
        "Pengarsipan dokumen digital aman di Microsoft OneDrive & Teams.",
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
            // PORTOFOLIO &amp; IMPLEMENTASI
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            Studi Kasus &amp; Portofolio Nyata
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "6px" }}>
            Implementasi nyata keahlian di bidang UI/UX Design, IT Support, Jaringan Komputer, dan Administrasi Data.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
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
