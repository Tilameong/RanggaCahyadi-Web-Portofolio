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
  CheckCircle2,
} from "lucide-react";

export default function ExperienceSection() {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    title: string;
    category: string;
    image: string;
    description: string;
  } | null>(null);

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

  const fieldProjects = [
    {
      title: "Troubleshooting & Perbaikan Printer Epson",
      category: "Hardware & Peripheral Support",
      description:
        "Dokumentasi penanganan kendala teknis perangkat printer di ruang kerja operasional: pemeriksaan penarik kertas, instalasi driver, penanganan tinta, dan uji fungsi cetak.",
      image: "/assets/Project/Memperbaiki Printer Epson di Ruang Kerja.png",
      tag: "Printer & Hardware Support",
    },
    {
      title: "Maintenance Jaringan di Ruang Server",
      category: "Network Infrastructure Support",
      description:
        "Dokumentasi pemeriksaan konektivitas di ruang server: penataan kabel LAN (UTP), pemantauan koneksi rack switch/router, dan verifikasi kestabilan jaringan lokal.",
      image: "/assets/Project/Teknisi Jaringan di Ruang Server.png",
      tag: "Ruang Server & LAN",
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

        {/* Real Fieldwork Documentation Showcase (Dokumentasi Lapangan Teknisi IT) */}
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
                  Dokumentasi Praktik &amp; Troubleshooting Lapangan
                </h3>
                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                  Bukti visual penanganan perangkat keras &amp; infrastruktur jaringan di lapangan
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
              Hands-on Technical Support
            </span>
          </div>

          {/* Photo Cards Grid */}
          <div className="field-grid">
            {fieldProjects.map((item, idx) => (
              <div
                key={idx}
                className="field-card"
                onClick={() => setSelectedPhoto(item)}
              >
                <div className="field-img-wrap">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 550px"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                  <div className="field-overlay">
                    <span className="field-zoom-badge">
                      <Maximize2 size={14} />
                      Lihat Foto Penuh
                    </span>
                  </div>
                  <span className="field-pill">{item.tag}</span>
                </div>

                <div className="field-body">
                  <div className="field-cat">{item.category}</div>
                  <h4 className="field-title">{item.title}</h4>
                  <p className="field-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Lightbox Preview Foto Dokumentasi */}
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
              maxWidth: "750px",
              padding: "0",
              overflow: "hidden",
              border: "1px solid var(--border-hover)",
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: "16px 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid var(--border-subtle)",
                background: "#090d16",
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--indigo-light)",
                    fontFamily: "var(--font-mono)",
                    textTransform: "uppercase",
                  }}
                >
                  {selectedPhoto.category}
                </span>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", marginTop: "2px" }}>
                  {selectedPhoto.title}
                </h3>
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
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "420px",
                background: "#030712",
              }}
            >
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                sizes="800px"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Modal Caption */}
            <div
              style={{
                padding: "16px 20px",
                background: "#090d16",
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.55 }}>
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .field-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .field-card {
          border-radius: 14px;
          border: 1px solid var(--border-subtle);
          background: rgba(15, 23, 42, 0.7);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.25s ease;
          display: flex;
          flex-direction: column;
        }

        .field-card:hover {
          border-color: var(--indigo-primary);
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
        }

        .field-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          background: #0d1322;
          overflow: hidden;
        }

        .field-overlay {
          position: absolute;
          inset: 0;
          background: rgba(9, 13, 22, 0.4);
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
          padding: 6px 12px;
          border-radius: 20px;
          background: rgba(99, 102, 241, 0.9);
          color: #ffffff;
          font-size: 0.8rem;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        .field-pill {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background: rgba(9, 13, 22, 0.85);
          backdrop-filter: blur(8px);
          color: var(--indigo-light);
          border: 1px solid rgba(99, 102, 241, 0.3);
          padding: 3px 8px;
          border-radius: 5px;
          font-size: 0.72rem;
          font-family: var(--font-mono);
          font-weight: 600;
        }

        .field-body {
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .field-cat {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--orange-light);
          margin-bottom: 4px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .field-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 8px;
          line-height: 1.35;
        }

        .field-desc {
          font-size: 0.86rem;
          color: var(--text-secondary);
          line-height: 1.55;
          margin: 0;
        }

        @media (max-width: 768px) {
          .field-grid {
            grid-template-columns: 1fr !important;
            gap: 16px;
          }

          .field-img-wrap {
            aspect-ratio: 16 / 10;
          }

          .field-body {
            padding: 16px;
          }

          .field-title {
            font-size: 1rem;
          }

          .field-desc {
            font-size: 0.84rem;
          }
        }
      `}</style>
    </section>
  );
}
