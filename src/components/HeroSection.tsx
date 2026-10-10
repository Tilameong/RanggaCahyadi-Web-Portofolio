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
} from "lucide-react";

interface HeroSectionProps {
  onDownloadCv: () => void;
  onOpenContact: () => void;
}

export default function HeroSection({
  onDownloadCv,
  onOpenContact,
}: HeroSectionProps) {
  // Photo toggle: "pro" (new photo with Microsoft logo) vs "formal" (black suit photo)
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
    <section id="tentang" className="hero-section">
      <div className="container-custom">
        <div className="hero-grid">
          {/* Photo Column - Placed gracefully at top on mobile, centered */}
          <div className="hero-photo-col">
            <div className="hero-photo-card">
              {/* Dual Photo Switcher Tabs */}
              <div className="photo-tabs">
                <button
                  type="button"
                  onClick={() => setActivePhoto("pro")}
                  className={`photo-tab-btn ${activePhoto === "pro" ? "active-pro" : ""}`}
                >
                  Foto Profesional
                </button>
                <button
                  type="button"
                  onClick={() => setActivePhoto("formal")}
                  className={`photo-tab-btn ${activePhoto === "formal" ? "active-formal" : ""}`}
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
                  sizes="(max-width: 640px) 270px, 330px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                  priority
                />

                {/* Subtle bottom shadow overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 75%, rgba(15, 23, 42, 0.75) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>

              {/* Caption Under Photo */}
              <div className="photo-caption">
                <div style={{ textAlign: "left" }}>
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
                    whiteSpace: "nowrap",
                  }}
                >
                  {currentPhoto.badge}
                </span>
              </div>
            </div>
          </div>

          {/* Text & Information Column */}
          <div className="hero-content-col">
            {/* Top Status Pill - Wrap-friendly, never overflows screen */}
            <div className="hero-status-badge">
              <span className="status-dot-pulse" style={{ flexShrink: 0 }} />
              <span>Siap Bekerja &bull; IT Support &amp; IT Administration</span>
            </div>

            {/* Name */}
            <h1 className="hero-title">
              Rangga Cahyadi
            </h1>

            {/* Contact details line directly from CV */}
            <div className="hero-contacts">
              <span className="contact-item">
                <MapPin size={14} color="var(--indigo-light)" />
                Bandung, Jawa Barat
              </span>
              <span className="bullet-sep">&bull;</span>
              <a
                href="https://wa.me/6281539235487"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <Phone size={14} color="var(--orange-light)" />
                0815-3923-5487
              </a>
              <span className="bullet-sep">&bull;</span>
              <a
                href="mailto:tilameorangga@gmail.com"
                className="contact-link"
              >
                <Mail size={14} color="var(--indigo-light)" />
                tilameorangga@gmail.com
              </a>
            </div>

            {/* Exact CV Profile Summary */}
            <p className="hero-bio">
              Lulusan <strong>D3 Manajemen Informatika</strong> dengan pengalaman di bidang{" "}
              <strong>IT Technical Support</strong> dan <strong>administrasi IT</strong>. Terampil
              melakukan troubleshooting PC, printer, CCTV, hardware/software, jaringan dasar, serta
              pengolahan data menggunakan Microsoft Excel. Memiliki sertifikat Cisco Networking
              Academy di bidang networking dan cybersecurity, dengan fokus pada penyelesaian kendala
              teknis, pemeliharaan perangkat, dan efisiensi administrasi. Berminat mengembangkan
              karier di bidang IT Support, Technical Support, dan IT Administration.
            </p>

            {/* Point-based highlights strip */}
            <div className="hero-points-grid">
              <div className="hero-point-item">
                <CheckCircle size={15} color="var(--orange-light)" style={{ flexShrink: 0 }} />
                <span>PC, Printer &amp; CCTV Troubleshooting</span>
              </div>

              <div className="hero-point-item">
                <CheckCircle size={15} color="var(--indigo-light)" style={{ flexShrink: 0 }} />
                <span>Cisco CCNA &amp; Cybersecurity Certified</span>
              </div>

              <div className="hero-point-item">
                <CheckCircle size={15} color="#34d399" style={{ flexShrink: 0 }} />
                <span>Excel PivotTable, HLOOKUP &amp; Admin IT</span>
              </div>

              <div className="hero-point-item">
                <CheckCircle size={15} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>UI/UX Designer (Figma Prototyping)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="hero-btn-group">
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
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding-top: 115px;
          padding-bottom: 60px;
          position: relative;
          width: 100%;
          overflow-x: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 48px;
          align-items: center;
          width: 100%;
          max-width: 100%;
        }

        .hero-photo-col {
          display: flex;
          justifyContent: center;
          align-items: center;
          width: 100%;
        }

        .hero-photo-card {
          width: 100%;
          max-width: 320px;
          border-radius: 16px;
          border: 1px solid var(--border-card);
          background: rgba(15, 23, 42, 0.85);
          padding: 12px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.45);
          box-sizing: border-box;
          margin: 0 auto;
        }

        .photo-tabs {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6px;
          margin-bottom: 10px;
          padding: 3px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
        }

        .photo-tab-btn {
          padding: 6px 8px;
          border-radius: 6px;
          font-size: 0.76rem;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: all 0.2s ease;
          background: transparent;
          color: var(--text-muted);
        }

        .photo-tab-btn.active-pro {
          background: linear-gradient(135deg, #6366f1, #818cf8);
          color: #ffffff;
        }

        .photo-tab-btn.active-formal {
          background: linear-gradient(135deg, #f97316, #fb923c);
          color: #ffffff;
        }

        .hero-image-container {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 3 / 4;
          width: 100%;
          background-color: #0d1322;
        }

        .photo-caption {
          margin-top: 12px;
          padding: 10px 12px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justifyContent: space-between;
          gap: 8px;
        }

        .hero-content-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .hero-status-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: 9999px;
          margin-bottom: 14px;
          color: #34d399;
          font-size: 0.82rem;
          font-weight: 600;
          max-width: 100%;
          box-sizing: border-box;
          word-break: break-word;
        }

        .hero-title {
          font-size: clamp(2rem, 3.8vw, 3.2rem);
          font-weight: 800;
          line-height: 1.15;
          color: #ffffff;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
          word-break: break-word;
          max-width: 100%;
        }

        .hero-contacts {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-bottom: 18px;
          font-family: var(--font-mono);
          max-width: 100%;
          box-sizing: border-box;
        }

        .contact-item,
        .contact-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--text-secondary);
          text-decoration: none;
          word-break: break-all;
        }

        .bullet-sep {
          color: var(--text-dim);
        }

        .hero-bio {
          color: var(--text-secondary);
          font-size: 0.98rem;
          line-height: 1.7;
          margin-bottom: 22px;
          max-width: 640px;
          word-break: break-word;
        }

        .hero-points-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 26px;
          width: 100%;
          max-width: 620px;
          box-sizing: border-box;
        }

        .hero-point-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          font-size: 0.85rem;
          color: #e2e8f0;
          box-sizing: border-box;
          word-break: break-word;
        }

        .hero-btn-group {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        @media (max-width: 860px) {
          .hero-section {
            padding-top: 90px;
            padding-bottom: 40px;
          }

          .hero-grid {
            display: flex;
            flex-direction: column;
            gap: 24px;
            align-items: center;
            width: 100%;
            max-width: 100%;
          }

          .hero-photo-col {
            width: 100%;
            display: flex;
            justifyContent: center;
            align-items: center;
            margin: 0 auto;
          }

          .hero-photo-card {
            max-width: 270px;
            margin: 0 auto;
          }

          .hero-content-col {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: 100%;
            padding: 0;
          }

          .hero-status-badge {
            margin: 0 auto 12px;
            text-align: center;
            justify-content: center;
          }

          .hero-title {
            text-align: center;
            font-size: 1.85rem;
          }

          .hero-contacts {
            justify-content: center;
            text-align: center;
            gap: 8px;
            font-size: 0.82rem;
          }

          .bullet-sep {
            display: none;
          }

          .hero-bio {
            text-align: center;
            font-size: 0.92rem;
            margin-bottom: 18px;
          }

          .hero-points-grid {
            grid-template-columns: 1fr;
            width: 100%;
            max-width: 320px;
            margin: 0 auto 20px;
          }

          .hero-point-item {
            justify-content: flex-start;
            text-align: left;
          }

          .hero-btn-group {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
            margin: 0 auto;
          }

          .hero-btn-group button,
          .hero-btn-group a {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
