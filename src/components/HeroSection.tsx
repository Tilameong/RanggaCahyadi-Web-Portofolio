"use client";

import React from "react";
import Image from "next/image";
import {
  Download,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ShieldCheck,
  Layout,
  Layers,
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
    <section
      id="tentang"
      style={{
        paddingTop: "125px",
        paddingBottom: "60px",
        position: "relative",
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.25fr 0.75fr",
            gap: "48px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Real Profile Content */}
          <div>
            {/* Top Status & Role Pill */}
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
                fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                marginBottom: "12px",
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
                gap: "16px",
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                marginBottom: "20px",
                fontFamily: "var(--font-mono)",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <MapPin size={14} color="var(--indigo-light)" />
                Bandung, Jawa Barat
              </span>
              <span>&bull;</span>
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
              <span>&bull;</span>
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
                fontSize: "1rem",
                lineHeight: 1.75,
                marginBottom: "24px",
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
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px",
                marginBottom: "28px",
                maxWidth: "600px",
              }}
              className="points-grid"
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
                  fontSize: "0.86rem",
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
                  fontSize: "0.86rem",
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
                  fontSize: "0.86rem",
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
                  fontSize: "0.86rem",
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
                gap: "12px",
                alignItems: "center",
              }}
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

          {/* Right Column: Clean & Professional Portrait Card */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "340px",
                borderRadius: "16px",
                border: "1px solid var(--border-card)",
                background: "rgba(15, 23, 42, 0.8)",
                padding: "12px",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4)",
              }}
            >
              {/* Photo Box */}
              <div
                style={{
                  position: "relative",
                  borderRadius: "12px",
                  overflow: "hidden",
                  aspectRatio: "3/4",
                  backgroundColor: "#0d1322",
                }}
              >
                <Image
                  src="/assets/Pas Photo/Potret Identitas Pria Berjas Hitam.png"
                  alt="Rangga Cahyadi - Pas Foto Berjas Hitam"
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center top",
                  }}
                  priority
                />
              </div>

              {/* Clean Caption Badge under Photo */}
              <div
                style={{
                  marginTop: "12px",
                  padding: "10px",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#ffffff" }}>
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
                    background: "rgba(99, 102, 241, 0.12)",
                    color: "var(--indigo-light)",
                    border: "1px solid rgba(99, 102, 241, 0.25)",
                  }}
                >
                  IT Support &amp; Admin
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .points-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
