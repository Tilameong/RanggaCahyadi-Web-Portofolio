"use client";

import React, { useEffect } from "react";
import { X, Download, ExternalLink, ShieldCheck, FileText } from "lucide-react";

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  badge: string;
  description: string;
  fileUrl: string;
  accent: string;
  verifyUrl?: string;
}

interface CertificateModalProps {
  cert: CertificateItem | null;
  onClose: () => void;
}

export default function CertificateModal({ cert, onClose }: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (cert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          height: "85vh",
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: "16px 24px",
            background: "rgba(10, 12, 22, 0.98)",
            borderBottom: "1px solid rgba(139, 92, 246, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "8px",
                background: "rgba(139, 92, 246, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(139, 92, 246, 0.3)",
              }}
            >
              <ShieldCheck size={20} color="var(--orange-400)" />
            </div>
            <div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "#ffffff",
                  lineHeight: 1.2,
                }}
              >
                {cert.title}
              </h3>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "var(--purple-400)",
                  fontFamily: "var(--font-mono)",
                  marginTop: "2px",
                }}
              >
                {cert.issuer} • {cert.badge}
              </div>
            </div>
          </div>

          {/* Action Toolbar */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <a
              href={cert.fileUrl}
              download
              className="btn-primary"
              style={{
                padding: "8px 14px",
                fontSize: "0.82rem",
                borderRadius: "8px",
              }}
            >
              <Download size={15} />
              <span>Unduh PDF</span>
            </a>

            {cert.verifyUrl && (
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{
                  padding: "8px 12px",
                  fontSize: "0.82rem",
                  borderRadius: "8px",
                  borderColor: "rgba(0, 234, 100, 0.4)",
                  color: "#00ea64",
                  textDecoration: "none",
                }}
              >
                <ShieldCheck size={15} />
                <span>Verifikasi Profil</span>
              </a>
            )}

            <a
              href={cert.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{
                padding: "8px 12px",
                fontSize: "0.82rem",
                borderRadius: "8px",
              }}
              title="Buka di tab baru"
            >
              <ExternalLink size={16} />
              <span className="hide-on-mobile">Tab Baru</span>
            </a>

            <button
              onClick={onClose}
              style={{
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#ffffff",
                borderRadius: "8px",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              aria-label="Tutup modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body / PDF Viewer Frame */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#06080e",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <iframe
            src={`${cert.fileUrl}#toolbar=0&navpanes=0`}
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              backgroundColor: "#111422",
            }}
            title={cert.title}
          />
        </div>

        {/* Modal Footer Description */}
        <div
          style={{
            padding: "12px 24px",
            background: "rgba(10, 12, 22, 0.95)",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span>{cert.description}</span>
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--orange-400)" }}>
            Terverifikasi Asli
          </span>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 600px) {
          .hide-on-mobile {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
