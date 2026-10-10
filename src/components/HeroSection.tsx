"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Download,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowRight,
  UserCheck,
  Sparkles,
} from "lucide-react";

interface HeroSectionProps {
  onDownloadCv: () => void;
  onOpenContact: () => void;
}

export default function HeroSection({
  onDownloadCv,
  onOpenContact,
}: HeroSectionProps) {
  // Photo toggle state: "pro" (new photo with Microsoft logo) vs "formal" (black suit photo)
  const [activePhoto, setActivePhoto] = useState<"pro" | "formal">("pro");

  const photos = {
    pro: {
      name: "Foto Profesional",
      src: "/assets/Pas Photo/Potret Profesional dengan Logo Microsoft.png",
      alt: "Rangga Cahyadi - Potret Profesional IT Support",
      badge: "Profil Profesional",
    },
    formal: {
      name: "Pas Foto Formal",
      src: "/assets/Pas Photo/Potret Identitas Pria Berjas Hitam.png",
      alt: "Rangga Cahyadi - Pas Foto Identitas Berjas Hitam",
      badge: "Pas Foto Resmi",
    },
  };

  const currentPhoto = photos[activePhoto];

  return (
    <section
      id="tentang"
      style={{
        paddingTop: "110px",
        paddingBottom: "50px",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <div className="container-custom">
        <div className="hero-grid">
          {/* Text & Information Column */}
          <div className="hero-content-col">
            {/* Top Status Pill */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "5px 12px",
                background: "rgba(16, 185, 129, 0.1)",
                border: "1px solid rgba(16, 185, 129, 0.25)",
                borderRadius: "9999px",
                marginBottom: "16px",
              }}
            >
              <span className="status-dot-pulse" />
              <span
                style={{
                  color: "#34d399",
                  fontSize: "0.82rem",
                  fontWeight: 600,
                }}
              >
                Siap Bekerja &bull; IT Support, Technical Support &amp; IT Administration
              </span>
            </div>

            {/* Name */}
            <h1
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                marginBottom: "10px",
              }}
            >
              Rangga Cahyadi
            </h1>

            {/* Contact details line directly from CV */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "14px",
                fontSize: "0.88rem",
                color: "var(--text-muted)",
                marginBottom: "18px",
                fontFamily: "var(--font-mono)",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <MapPin size={14} color="var(--indigo-light)" />
                Bandung, Jawa Barat
              </span>
              <span className="hide-on-mobile">&bull;</span>
              <a
                href="https://wa.me/6281539235487"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                }}
              >
                <Phone size={14} color="var(--orange-light)" />
                0815-3923-5487
              </a>
              <span className="hide-on-mobile">&bull;</span>
              <a
                href="mailto:tilameorangga@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                }}
              >
                <Mail size={14} color="var(--indigo-light)" />
                tilameorangga@gmail.com
              </a>
            </div>

            {/* Exact CV Profile Summary */}
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.98rem",
                lineHeight: 1.7,
                marginBottom: "22px",
                maxWidth: "640px",
              }}
            >
              Lulusan <strong>D3 Manajemen Informatika</strong> dengan pengalaman di bidang{" "}
              <strong>IT Technical Support</strong> dan <strong>administrasi IT</strong>. Terampil
              melakukan troubleshooting PC, printer, CCTV, hardware/software, jaringan dasar, serta
              pengolahan data menggunakan Microsoft Excel. Memiliki sertifikat Cisco Networking
              Academy di bidang networking dan cybersecurity, dengan fokus pada penyelesaian kendala
              teknis, pemeliharaan perangkat, dan efisiensi administrasi. Berminat mengembangkan
              karier di bidang IT Support, Technical Support, dan IT Administration.
            </p>

            {/* Point-based highlights strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "10px",
                marginBottom: "26px",
                maxWidth: "620px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 12px",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  color: "#e2e8f0",
                }}
              >
                <CheckCircle size={15} color="var(--orange-light)" style={{ flexShrink: 0 }} />
                <span>PC, Printer &amp; CCTV Troubleshooting</span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 12px",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  color: "#e2e8f0",
                }}
              >
                <CheckCircle size={15} color="var(--indigo-light)" style={{ flexShrink: 0 }} />
                <span>Cisco CCNA &amp; Cybersecurity Certified</span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 12px",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  color: "#e2e8f0",
                }}
              >
                <CheckCircle size={15} color="#34d399" style={{ flexShrink: 0 }} />
                <span>Excel PivotTable, HLOOKUP &amp; Admin IT</span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 12px",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  color: "#e2e8f0",
                }}
              >
                <CheckCircle size={15} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>UI/UX Designer (Figma Prototyping)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                alignItems: "center",
              }}
              className="hero-btn-group"
            >
              <button
                onClick={onDownloadCv}
                className="btn-primary"
                id="btn-hero-download"
              >
                <Download size={16} />
                <span>Unduh CV Resmi (.docx)</span>
              </button>

              <a
                href="https://wa.me/6281539235487?text=Halo%20Rangga%20Cahyadi,%20saya%20melihat%20portofolio%20IT%20Anda"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Phone size={16} />
                <span>WhatsApp: 0815-3923-5487</span>
              </a>

              <a
                href="#sertifikat"
                className="btn-ghost"
              >
                <span>Lihat Sertifikat</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Photo Column - Fully Responsive with Both Photos Switcher */}
          <div className="hero-photo-col">
            <div className="hero-photo-card">
              {/* Dual Photo Switcher Tabs */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "6px",
                  marginBottom: "10px",
                  padding: "3px",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setActivePhoto("pro")}
                  style={{
                    padding: "6px 8px",
                    borderRadius: "6px",
                    fontSize: "0.76rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    border: "none",
                    transition: "all 0.2s ease",
                    background:
                      activePhoto === "pro"
                        ? "linear-gradient(135deg, #6366f1, #818cf8)"
                        : "transparent",
                    color: activePhoto === "pro" ? "#ffffff" : "var(--text-muted)",
                  }}
                >
                  Foto Profesional
                </button>
                <button
                  type="button"
                  onClick={() => setActivePhoto("formal")}
                  style={{
                    padding: "6px 8px",
                    borderRadius: "6px",
                    fontSize: "0.76rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    border: "none",
                    transition: "all 0.2s ease",
                    background:
                      activePhoto === "formal"
                        ? "linear-gradient(135deg, #f97316, #fb923c)"
                        : "transparent",
                    color: activePhoto === "formal" ? "#ffffff" : "var(--text-muted)",
                  }}
                >
                  Pas Foto Formal
                </button>
              </div>

              {/* Photo Frame Container */}
              <div className="hero-image-container">
                <Image
                  src={currentPhoto.src}
                  alt={currentPhoto.alt}
                  fill
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 340px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                  priority
                />

                {/* Subtle bottom gradient shadow */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 75%, rgba(15, 23, 42, 0.7) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Caption Under Photo */}
              <div
                style={{
                  marginTop: "12px",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#ffffff" }}>
                    Rangga Cahyadi
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "var(--indigo-light)", fontFamily: "var(--font-mono)" }}>
                    Politeknik Negeri Lampung
                  </div>
                </div>

                <span
                  style={{
                    fontSize: "0.72rem",
                    fontFamily: "var(--font-mono)",
                    padding: "3px 8px",
                    borderRadius: "4px",
                    background:
                      activePhoto === "pro"
                        ? "rgba(99, 102, 241, 0.15)"
                        : "rgba(249, 115, 22, 0.15)",
                    color:
                      activePhoto === "pro" ? "var(--indigo-light)" : "var(--orange-light)",
                    border:
                      activePhoto === "pro"
                        ? "1px solid rgba(99, 102, 241, 0.3)"
                        : "1px solid rgba(249, 115, 22, 0.3)",
                    fontWeight: 600,
                  }}
                >
                  {currentPhoto.badge}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 40px;
          align-items: center;
        }

        .hero-photo-col {
          display: flex;
          justifyContent: center;
          align-items: center;
          width: 100%;
        }

        .hero-photo-card {
          width: 100%;
          max-width: 330px;
          border-radius: 16px;
          border: 1px solid var(--border-card);
          background: rgba(15, 23, 42, 0.85);
          padding: 12px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.45);
        }

        .hero-image-container {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 3 / 4;
          width: 100%;
          background-color: #0d1322;
        }

        @media (max-width: 900px) {
          .hero-grid {
            display: flex;
            flex-direction: column;
            gap: 28px;
          }

          .hero-photo-col {
            order: -1; /* Display photo prominently at the top on mobile */
            margin-bottom: 8px;
          }

          .hero-photo-card {
            max-width: 280px;
          }

          .hero-btn-group {
            width: 100%;
          }

          .hero-btn-group button,
          .hero-btn-group a {
            flex: 1 1 100%;
            text-align: center;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
