"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Briefcase,
  Calendar,
  MapPin,
  Camera,
  Maximize2,
  X,
} from "lucide-react";

export default function ExperienceSection() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

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

  const fieldPhotos = [
    {
      src: "/assets/Project/Memperbaiki Printer Epson di Ruang Kerja.png",
      alt: "Dokumentasi IT Technician - Troubleshooting Printer Epson",
      badge: "Troubleshooting Printer Epson",
    },
    {
      src: "/assets/Project/Teknisi Jaringan di Ruang Server.png",
      alt: "Dokumentasi IT Technician - Maintenance Jaringan di Ruang Server",
      badge: "Teknisi Jaringan & Ruang Server",
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

        {/* Real Fieldwork Documentation Showcase (Clean Tanpa Caption, Tidak Terpotong) */}
        <div style={{ marginTop: "44px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "10px",
              marginBottom: "18px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "rgba(99, 102, 241, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Camera size={18} color="var(--indigo-light)" />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Dokumentasi Lapangan Teknisi IT
                </h3>
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                  Bukti visual penanganan printer &amp; jaringan server (klik untuk memperbesar)
                </div>
              </div>
            </div>

            <span
              style={{
                fontSize: "0.74rem",
                fontFamily: "var(--font-mono)",
                padding: "4px 10px",
                borderRadius: "6px",
                background: "rgba(16, 185, 129, 0.12)",
                color: "#34d399",
                border: "1px solid rgba(16, 185, 129, 0.3)",
                fontWeight: 600,
              }}
            >
              Hands-on Fieldwork
            </span>
          </div>

          {/* Photo Cards Grid: Tanpa Caption, Rasio Utuh Tanpa Kepotong */}
          <div className="field-grid">
            {fieldPhotos.map((photo, idx) => (
              <div
                key={idx}
                className="field-card"
                onClick={() => setSelectedPhoto(photo.src)}
                title="Klik untuk melihat foto penuh"
              >
                <div className="field-img-wrap">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    priority={false}
                  />
                  <div className="field-overlay">
                    <span className="field-zoom-badge">
                      <Maximize2 size={15} />
                      <span>Lihat Foto Penuh</span>
                    </span>
                  </div>
                  <span className="field-pill">{photo.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Lightbox Preview Foto Dokumentasi Tanpa Caption (100% Utuh) */}
      {selectedPhoto && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedPhoto(null)}
          style={{ zIndex: 1000 }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "600px",
              width: "92vw",
              padding: "0",
              overflow: "hidden",
              border: "1px solid var(--border-hover)",
              background: "#030712",
              borderRadius: "14px",
            }}
          >
            {/* Modal Top Bar */}
            <div
              style={{
                padding: "12px 18px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid var(--border-subtle)",
                background: "#090d16",
              }}
            >
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#ffffff",
                  fontFamily: "var(--font-mono)",
                }}
              >
                Dokumentasi Lapangan Teknisi IT
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "none",
                  color: "#ffffff",
                  padding: "6px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image Display (contain, utuh 100%) */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "75vh",
                maxHeight: "720px",
                background: "#030712",
              }}
            >
              <Image
                src={selectedPhoto}
                alt="Dokumentasi Lapangan Penuh"
                fill
                sizes="(max-width: 768px) 95vw, 600px"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .field-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          width: 100%;
        }

        .field-card {
          border-radius: 14px;
          border: 1px solid var(--border-card);
          background: rgba(13, 20, 36, 0.85);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          padding: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .field-card:hover {
          border-color: var(--indigo-light);
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(99, 102, 241, 0.2);
        }

        .field-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 10 / 16;
          background: #080d1a;
          border-radius: 10px;
          overflow: hidden;
        }

        .field-overlay {
          position: absolute;
          inset: 0;
          background: rgba(9, 13, 22, 0.35);
          opacity: 0;
          transition: opacity 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .field-card:hover .field-overlay {
          opacity: 1;
        }

        .field-zoom-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          border-radius: 20px;
          background: rgba(99, 102, 241, 0.95);
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
        }

        .field-pill {
          position: absolute;
          bottom: 12px;
          left: 12px;
          background: rgba(9, 13, 22, 0.88);
          backdrop-filter: blur(8px);
          color: #f1f5f9;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 4px 10px;
          border-radius: 6px;
          font-size: 0.74rem;
          font-family: var(--font-mono);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .field-grid {
            grid-template-columns: 1fr !important;
            gap: 18px;
            max-width: 320px;
            margin: 0 auto;
          }

          .field-img-wrap {
            aspect-ratio: 10 / 16;
          }
        }
      `}</style>
    </section>
  );
}
