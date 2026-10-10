"use client";

import React, { useState } from "react";
import { Award, ShieldCheck, Eye, Download, FileText } from "lucide-react";
import CertificateModal, { CertificateItem } from "./CertificateModal";

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const certificates: CertificateItem[] = [
    {
      id: "ccna-intro",
      title: "CCNA Introduction to Networks",
      issuer: "Cisco Networking Academy",
      category: "Jaringan Komputer",
      badge: "Cisco Certified",
      description: "Penguasaan dasar protokol jaringan TCP/IP & OSI model, pengalamatan IPv4/IPv6, dan setup perangkat router/switch.",
      fileUrl: "/assets/Certificated/CCNA-_Introduction_to_Networks_certificate_tilameorangga-gmail-com_8cb2c868-a58c-4dd3-9753-19f943e9dcaa.pdf",
      accent: "var(--indigo-primary)",
    },
    {
      id: "ccna-switching",
      title: "CCNA Switching, Routing, and Wireless Essentials",
      issuer: "Cisco Networking Academy",
      category: "Jaringan Komputer",
      badge: "Cisco Certified",
      description: "Konfigurasi VLAN, Inter-VLAN routing, STP, EtherChannel, DHCPv4/v6, keamanan port switch, dan konsep jaringan WLAN.",
      fileUrl: "/assets/Certificated/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_tilameorangga-gmail-com_89de7f09-181e-484.pdf",
      accent: "var(--orange-accent)",
    },
    {
      id: "cybersecurity",
      title: "Cisco Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      category: "Keamanan Siber",
      badge: "Cyber Defense",
      description: "Pemahaman fundamental serangan malware, phishing, mitigasi risiko data, dan pertahanan integritas sistem informasi.",
      fileUrl: "/assets/Certificated/Introduction_to_Cybersecurity_certificate_tilameorangga-gmail-com_3d76b311-c145-4649-8148-0d3580f2d5c2.pdf",
      accent: "#34d399",
    },
    {
      id: "pept-toeic",
      title: "English Proficiency Test (PEPT / TOEIC)",
      issuer: "International Testing Center",
      category: "Bahasa Internasional",
      badge: "Skor: 670",
      description: "Kemahiran komunikasi bahasa Inggris kerja profesional dengan perolehan skor TOEIC 670 (Listening & Reading).",
      fileUrl: "/assets/Certificated/Sertifikat Bahasa Inggris Toeic.pdf",
      accent: "#38bdf8",
    },
    {
      id: "ccna-award",
      title: "CCNA Course Completion Credential",
      issuer: "Cisco Networking Academy",
      category: "Kredensial Cisco",
      badge: "Sertifikat Kelulusan",
      description: "Sertifikat resmi kelulusan kurikulum komprehensif Cisco Certified Network Associate.",
      fileUrl: "/assets/Certificated/CCNA-Certificated.pdf",
      accent: "var(--indigo-primary)",
    },
    {
      id: "oracle-db",
      title: "Oracle Academy Course Certificate",
      issuer: "Oracle Academy",
      category: "Basis Data & Query",
      badge: "Oracle Certified",
      description: "Kompetensi struktur perancangan basis data relasional (RDBMS) dan penulisan sintaks SQL standar industri.",
      fileUrl: "/assets/Certificated/course_certificate Oracle.pdf",
      accent: "#f59e0b",
    },
  ];

  return (
    <section
      id="sertifikat"
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
            // SERTIFIKAT KOMPETENSI
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            Sertifikasi Resmi &amp; Kredensial
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "6px" }}>
            Dokumen asli dapat di-preview secara langsung dalam format PDF atau diunduh sebagai bukti kualifikasi.
          </p>
        </div>

        {/* Certificate Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "20px",
          }}
        >
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="glass-card"
              style={{
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderTop: `3px solid ${cert.accent}`,
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "12px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.75rem",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    {cert.issuer}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.72rem",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      background: "rgba(255, 255, 255, 0.05)",
                      color: "#ffffff",
                      border: "1px solid var(--border-subtle)",
                    }}
                  >
                    {cert.badge}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "8px",
                    lineHeight: 1.35,
                  }}
                >
                  {cert.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.55,
                    marginBottom: "20px",
                  }}
                >
                  {cert.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "10px",
                  paddingTop: "14px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="btn-secondary"
                  style={{
                    padding: "8px 12px",
                    fontSize: "0.82rem",
                  }}
                >
                  <Eye size={14} />
                  <span>Lihat PDF</span>
                </button>

                <a
                  href={cert.fileUrl}
                  download
                  className="btn-ghost"
                  style={{
                    padding: "8px 12px",
                    fontSize: "0.82rem",
                    textDecoration: "none",
                  }}
                >
                  <Download size={14} />
                  <span>Unduh</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PDF Modal Viewer */}
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
