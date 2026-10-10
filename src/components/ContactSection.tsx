"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Send, Download, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { GithubIcon, HackerRankIcon } from "./SocialIcons";

interface ContactSectionProps {
  onDownloadCv: () => void;
  showToast: (msg: string) => void;
}

export default function ContactSection({
  onDownloadCv,
  showToast,
}: ContactSectionProps) {
  const { lang } = useLanguage();
  const t = translations[lang].contact;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [senderName, setSenderName] = useState("");
  const [senderContact, setSenderContact] = useState("");
  const [message, setMessage] = useState("");

  const email = "tilameorangga@gmail.com";
  const phone = "0815-3923-5487";
  const location = t.locationVal;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    showToast(lang === "in" ? "Email berhasil disalin ke clipboard!" : "Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    showToast(lang === "in" ? "Nomor WhatsApp berhasil disalin!" : "WhatsApp number copied!");
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName || !message) {
      showToast(t.toastError);
      return;
    }
    const text = encodeURIComponent(
      `Halo Rangga, saya ${senderName} (${senderContact}). Pesan: ${message}`
    );
    window.open(`https://wa.me/6281539235487?text=${text}`, "_blank");
    showToast(t.toastSuccess);
    setSenderName("");
    setSenderContact("");
    setMessage("");
  };

  return (
    <section
      id="kontak"
      style={{
        padding: "70px 0 80px",
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
            {t.tag}
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            {t.title}
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginTop: "6px" }}>
            {t.subtitle}
          </p>
        </div>

        {/* 2-Column Contact */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "28px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {/* Email */}
            <div
              className="glass-card contact-info-card"
              style={{
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: 0 }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "8px",
                    background: "rgba(99, 102, 241, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} color="var(--indigo-light)" />
                </div>
                <div style={{ minWidth: 0, overflow: "hidden" }}>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>EMAIL</div>
                  <a
                    href={`mailto:${email}`}
                    style={{
                      fontSize: "0.98rem",
                      fontWeight: 700,
                      color: "#ffffff",
                      textDecoration: "none",
                      wordBreak: "break-all",
                    }}
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="contact-actions" style={{ display: "flex", gap: "6px" }}>
                <button
                  onClick={handleCopyEmail}
                  className="btn-ghost"
                  style={{ padding: "7px 10px" }}
                  title="Salin email"
                >
                  {copiedEmail ? <Check size={16} color="#34d399" /> : <Copy size={16} />}
                </button>
              </div>
            </div>

            {/* WhatsApp */}
            <div
              className="glass-card contact-info-card"
              style={{
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: 0 }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "8px",
                    background: "rgba(249, 115, 22, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} color="var(--orange-light)" />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>WHATSAPP / TELEPON</div>
                  <a
                    href="https://wa.me/6281539235487"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "0.98rem", fontWeight: 700, color: "#ffffff", textDecoration: "none" }}
                  >
                    {phone}
                  </a>
                </div>
              </div>

              <div className="contact-actions" style={{ display: "flex", gap: "6px" }}>
                <button
                  onClick={handleCopyPhone}
                  className="btn-ghost"
                  style={{ padding: "7px 10px" }}
                  title="Salin nomor"
                >
                  {copiedPhone ? <Check size={16} color="#34d399" /> : <Copy size={16} />}
                </button>
                <a
                  href="https://wa.me/6281539235487"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: "7px 12px", fontSize: "0.82rem" }}
                >
                  Chat
                </a>
              </div>
            </div>

            {/* Location */}
            <div
              className="glass-card"
              style={{
                padding: "20px 24px",
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "8px",
                  background: "rgba(16, 185, 129, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MapPin size={20} color="#34d399" />
              </div>
              <div>
                <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{t.locationLabel}</div>
                <div style={{ fontSize: "0.98rem", fontWeight: 700, color: "#ffffff" }}>
                  {location}
                </div>
              </div>
            </div>

            {/* Developer Profiles (GitHub & HackerRank) */}
            <div
              className="glass-card"
              style={{
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <div style={{ fontSize: "0.78rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {lang === "in" ? "PROFIL & REPOSITORI PENGEMBANG" : "DEVELOPER PROFILES & REPOSITORIES"}
              </div>

              <div
                className="contact-profiles-grid"
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}
              >
                <a
                  href="https://github.com/Tilameong"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{
                    padding: "9px 12px",
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    textDecoration: "none",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <GithubIcon size={17} color="#ffffff" />
                  <span style={{ fontWeight: 600, color: "#ffffff" }}>GitHub</span>
                  <ExternalLink size={13} color="var(--text-muted)" />
                </a>

                <a
                  href="https://www.hackerrank.com/profile/tilameorangga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                  style={{
                    padding: "9px 12px",
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    textDecoration: "none",
                    borderRadius: "8px",
                    background: "rgba(0, 234, 100, 0.05)",
                    border: "1px solid rgba(0, 234, 100, 0.25)",
                    color: "#00ea64",
                  }}
                >
                  <HackerRankIcon size={17} />
                  <span style={{ fontWeight: 600, color: "#ffffff" }}>HackerRank</span>
                  <ExternalLink size={13} color="var(--text-muted)" />
                </a>
              </div>
            </div>

            {/* Download CV CTA */}
            <div
              className="glass-card"
              style={{
                padding: "22px",
                background: "rgba(99, 102, 241, 0.08)",
                border: "1px solid rgba(99, 102, 241, 0.3)",
              }}
            >
              <div style={{ fontWeight: 700, color: "#ffffff", fontSize: "1rem", marginBottom: "4px" }}>
                {t.cvCardTitle}
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "14px" }}>
                {t.cvCardDesc}
              </p>
              <button
                onClick={onDownloadCv}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center", marginBottom: "8px" }}
              >
                <Download size={16} />
                <span>{t.btnDownload}</span>
              </button>
              <a
                href="/assets/CV/CV-Rangga Cahyadi-IT-Admin.docx"
                download="CV-Rangga Cahyadi-IT-Admin.docx"
                style={{
                  fontSize: "0.78rem",
                  color: "var(--indigo-light)",
                  textDecoration: "none",
                  display: "block",
                  textAlign: "center",
                }}
              >
                {t.docxLink}
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div
            className="glass-card"
            style={{
              padding: "28px",
            }}
          >
            <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#ffffff", marginBottom: "16px" }}>
              {t.formTitle}
            </h3>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "6px" }}>
                  {t.formName} *
                </label>
                <input
                  type="text"
                  required
                  placeholder={lang === "in" ? "Nama atau Instansi" : "Your Name or Company"}
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-subtle)",
                    color: "#ffffff",
                    fontSize: "0.9rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "6px" }}>
                  {t.formContact}
                </label>
                <input
                  type="text"
                  placeholder={lang === "in" ? "email@perusahaan.com atau 0812..." : "email@company.com or +62..."}
                  value={senderContact}
                  onChange={(e) => setSenderContact(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-subtle)",
                    color: "#ffffff",
                    fontSize: "0.9rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-secondary)", marginBottom: "6px" }}>
                  {t.formMessage} *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder={lang === "in" ? "Tuliskan pesan Anda..." : "Write your message or inquiry..."}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid var(--border-subtle)",
                    color: "#ffffff",
                    fontSize: "0.9rem",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  padding: "12px",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                  marginTop: "4px",
                }}
              >
                <Send size={16} />
                <span>{t.btnSend}</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 520px) {
          .contact-info-card {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
          .contact-actions {
            width: 100% !important;
            justify-content: flex-end !important;
          }
          .contact-profiles-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
