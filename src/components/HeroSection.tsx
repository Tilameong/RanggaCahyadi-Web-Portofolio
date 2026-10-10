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
  return (
    <section id="tentang" className="hero-section">
      <div className="container-custom">
        <div className="hero-grid">
          {/* Left Column on Desktop: Text & Information (Lebih Lebar) */}
          <div className="hero-content-col">
            {/* Top Status Pill */}
            <div className="hero-status-badge">
              <span className="status-dot-pulse" style={{ flexShrink: 0 }} />
              <span>Siap Bekerja &bull; IT Support &amp; IT Administration</span>
            </div>

            {/* Name */}
            <h1 className="hero-title">
              Rangga Cahyadi
            </h1>

            {/* Contact details */}
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

          {/* Right Column on Desktop: Photo Card (Posisi Kanan) */}
          <div className="hero-photo-col">
            <div className="hero-photo-card">
              {/* Photo Frame Container */}
              <div className="hero-image-container">
                <Image
                  src="/assets/Pas Photo/Potret Profesional dengan Logo Microsoft.png"
                  alt="Rangga Cahyadi - Potret Profesional IT Support & Administration"
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

              </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          padding-top: 110px;
          padding-bottom: 60px;
          position: relative;
          width: 100%;
          overflow-x: hidden;
        }

        /* Desktop Mode: Text on LEFT (wider), Photo on RIGHT */
        .hero-grid {
          display: grid;
          grid-template-columns: 1.35fr 0.65fr;
          gap: 48px;
          align-items: center;
          width: 100%;
          max-width: 100%;
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

        .hero-photo-col {
          display: flex;
          justifyContent: flex-end;
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
        }


        .hero-image-container {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          aspect-ratio: 3 / 4;
          width: 100%;
          background-color: #0d1322;
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
          font-size: clamp(2.2rem, 4vw, 3.4rem);
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
          font-size: 1rem;
          line-height: 1.75;
          margin-bottom: 24px;
          max-width: 100%;
          word-break: break-word;
        }

        .hero-points-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
          margin-bottom: 26px;
          width: 100%;
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
          gap: 12px;
          align-items: center;
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        /* Mobile Mode (< 860px): Clean Centered Stack */
        @media (max-width: 860px) {
          .hero-section {
            padding-top: 85px;
            padding-bottom: 35px;
          }

          .hero-grid {
            display: flex;
            flex-direction: column;
            gap: 22px;
            align-items: center;
            width: 100%;
            max-width: 100%;
          }

          .hero-photo-col {
            order: -1; /* Display photo clean on top on mobile */
            justify-content: center;
            width: 100%;
            margin: 0 auto;
          }

          .hero-photo-card {
            max-width: 290px;
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
            margin: 0 auto 10px;
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
            margin-bottom: 16px;
          }

          .hero-points-grid {
            grid-template-columns: 1fr;
            width: 100%;
            max-width: 320px;
            margin: 0 auto 18px;
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
