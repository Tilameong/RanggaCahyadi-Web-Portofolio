"use client";

import React from "react";
import { Briefcase, Calendar, MapPin, ChevronRight, Check } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      company: "SPPG Kebon Kangkung",
      location: "Bandung",
      role: "Admin IT",
      period: "Juli 2026 – Sekarang",
      isCurrent: true,
      badgeColor: "var(--orange-accent)",
      bullets: [
        "Mengelola pengolahan data dan penyusunan laporan menggunakan Microsoft Excel, termasuk PivotTable dan HLOOKUP.",
        "Melakukan troubleshooting dasar pada perangkat PC, printer, dan CCTV untuk mengidentifikasi serta menangani kendala operasional.",
        "Mendukung penggunaan aplikasi perkantoran serta menangani kendala dasar pada perangkat lunak sesuai kebutuhan.",
        "Mengelola dan mengarsipkan data serta dokumen digital untuk mendukung kelancaran operasional.",
        "Menyiapkan data dan dokumentasi untuk kebutuhan rapat mingguan (weekly meeting).",
        "Membuat dan mengedit pamflet serta materi publikasi kegiatan menggunakan Canva.",
      ],
      skills: ["Microsoft Excel", "PivotTable & HLOOKUP", "PC, Printer & CCTV", "Dokumen Digital", "Canva"],
    },
    {
      company: "CV. Cahaya Mandiri Gemilang",
      location: "Jakarta Barat",
      role: "IT Technical Support",
      period: "Agustus 2024 – Juli 2026",
      isCurrent: false,
      badgeColor: "var(--indigo-primary)",
      bullets: [
        "Melakukan troubleshooting dan penanganan gangguan pada perangkat komputer (PC), printer, CCTV, hardware, dan software.",
        "Melakukan pemeriksaan perangkat, instalasi driver, serta pengecekan fungsi perangkat untuk memastikan operasional berjalan dengan baik.",
        "Melakukan troubleshooting jaringan dasar, termasuk pemeriksaan koneksi LAN dan konektivitas perangkat.",
        "Melaksanakan pengecekan unit secara langsung di lapangan serta menangani kendala teknis sesuai kebutuhan operasional.",
      ],
      skills: ["Troubleshooting PC/Hardware", "Driver & Software", "Jaringan Dasar LAN", "Pemeriksaan Lapangan"],
    },
    {
      company: "Yayasan Edukasi Wakaf Indonesia",
      location: "Yogyakarta",
      role: "UI/UX DESIGNER",
      status: "Magang",
      period: "Februari 2024 – Juni 2024",
      isCurrent: false,
      badgeColor: "#38bdf8",
      bullets: [
        "Merancang tampilan antarmuka website menggunakan Figma sesuai kebutuhan proyek.",
        "Membuat wireframe dan prototype sebagai acuan pengembangan antarmuka website.",
        "Menyusun alur navigasi untuk mempermudah pengguna mengakses fitur website.",
        "Melakukan revisi desain berdasarkan evaluasi dan masukan dari tim.",
      ],
      skills: ["Figma", "Wireframe", "Prototype", "Alur Navigasi Website", "Evaluasi Desain"],
    },
  ];

  return (
    <section
      id="pengalaman"
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
              background: "rgba(249, 115, 22, 0.1)",
              border: "1px solid rgba(249, 115, 22, 0.25)",
              color: "var(--orange-light)",
              fontSize: "0.78rem",
              fontFamily: "var(--font-mono)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "8px",
            }}
          >
            // PENGALAMAN KERJA
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            Pengalaman Kerja Profesional
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "6px" }}>
            Riwayat kontribusi teknis di bidang administrasi IT, dukungan teknis lapangan, dan perancangan UI/UX.
          </p>
        </div>

        {/* Experience List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "26px 28px",
                borderLeft: `4px solid ${exp.badgeColor}`,
              }}
            >
              {/* Card Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "16px",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#ffffff" }}>
                      {exp.role}
                    </h3>
                    {exp.status && (
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontFamily: "var(--font-mono)",
                          padding: "2px 8px",
                          borderRadius: "4px",
                          background: "rgba(56, 189, 248, 0.15)",
                          color: "#38bdf8",
                          border: "1px solid rgba(56, 189, 248, 0.3)",
                        }}
                      >
                        {exp.status}
                      </span>
                    )}
                    {exp.isCurrent && (
                      <span className="badge-status" style={{ padding: "2px 8px", fontSize: "0.75rem" }}>
                        Posisi Aktif
                      </span>
                    )}
                  </div>

                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: exp.badgeColor,
                      marginTop: "3px",
                    }}
                  >
                    {exp.company} &bull; <span style={{ color: "var(--text-muted)" }}>{exp.location}</span>
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    background: "rgba(255, 255, 255, 0.03)",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    border: "1px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Calendar size={13} color="var(--orange-light)" />
                  {exp.period}
                </div>
              </div>

              {/* Exact Bullets from CV */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                  marginBottom: "18px",
                }}
              >
                {exp.bullets.map((bullet, bIdx) => (
                  <div
                    key={bIdx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "10px",
                      fontSize: "0.92rem",
                      color: "#cbd5e1",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        color: exp.badgeColor,
                        fontWeight: "bold",
                        lineHeight: 1.2,
                        marginTop: "2px",
                      }}
                    >
                      &bull;
                    </span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Skills Tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  paddingTop: "14px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                {exp.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="tech-tag" style={{ fontSize: "0.76rem" }}>
                    {skill}
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
