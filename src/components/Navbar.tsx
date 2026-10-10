"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Navbar({ onDownloadCv }: { onDownloadCv: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.about, href: "#tentang" },
    { name: t.education, href: "#pendidikan" },
    { name: t.experience, href: "#pengalaman" },
    { name: t.certificates, href: "#sertifikat" },
    { name: t.skills, href: "#keahlian" },
    { name: t.projects, href: "#proyek" },
    { name: t.contact, href: "#kontak" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.25s ease",
        background: isScrolled
          ? "rgba(9, 13, 22, 0.95)"
          : "rgba(9, 13, 22, 0.75)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div
        className="container-custom"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "70px",
        }}
      >
        {/* Brand Logo */}
        <a
          href="#"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
            minWidth: 0,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "linear-gradient(135deg, #6366f1, #f97316)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <Layers size={20} color="#ffffff" />
          </div>
          <div style={{ minWidth: 0, overflow: "hidden" }}>
            <div
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.01em",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Rangga Cahyadi
            </div>
            <div
              style={{
                fontSize: "0.7rem",
                color: "var(--indigo-light)",
                fontFamily: "var(--font-mono)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              IT SUPPORT &bull; ADMIN IT &bull; UI/UX
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "24px",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.88rem",
                fontWeight: 500,
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls (IN | EN + Unduh CV + Mobile Burger) */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          {/* Header Language Switcher IN | EN */}
          <div className="header-lang-switcher" title="Pilih Bahasa / Choose Language">
            <button
              onClick={() => setLang("in")}
              className={`lang-toggle-btn ${lang === "in" ? "active" : ""}`}
              aria-label="Bahasa Indonesia"
            >
              IN
            </button>
            <span className="lang-toggle-sep">|</span>
            <button
              onClick={() => setLang("en")}
              className={`lang-toggle-btn ${lang === "en" ? "active" : ""}`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          {/* Download CV (Desktop) */}
          <button
            onClick={onDownloadCv}
            className="btn-primary nav-cv-btn"
            style={{
              padding: "9px 16px",
              fontSize: "0.86rem",
            }}
          >
            <Download size={15} />
            <span>{t.downloadCv}</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "6px",
              color: "#ffffff",
              padding: "7px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: "#090d16",
            borderBottom: "1px solid var(--border-subtle)",
            padding: "16px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: "var(--text-primary)",
                fontSize: "1rem",
                fontWeight: 500,
                padding: "8px 0",
                borderBottom: "1px solid rgba(255, 255, 255, 0.04)",
              }}
            >
              {link.name}
            </a>
          ))}

          {/* Download CV link in mobile drawer */}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onDownloadCv();
            }}
            className="btn-primary"
            style={{
              marginTop: "8px",
              width: "100%",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            <Download size={16} />
            <span>{t.downloadCv}</span>
          </button>
        </div>
      )}

      <style jsx>{`
        .header-lang-switcher {
          display: inline-flex;
          align-items: center;
          gap: 2px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border-subtle);
          border-radius: 6px;
          padding: 3px 5px;
        }

        .lang-toggle-btn {
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.74rem;
          font-weight: 700;
          cursor: pointer;
          padding: 3px 6px;
          border-radius: 4px;
          transition: all 0.15s ease;
        }

        .lang-toggle-btn:hover {
          color: #ffffff;
        }

        .lang-toggle-btn.active {
          background: rgba(99, 102, 241, 0.25);
          color: #ffffff;
          border-color: rgba(99, 102, 241, 0.5);
          box-shadow: 0 0 10px rgba(99, 102, 241, 0.3);
        }

        .lang-toggle-sep {
          color: rgba(255, 255, 255, 0.2);
          font-size: 0.72rem;
          user-select: none;
        }

        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 859px) {
          .nav-cv-btn,
          :global(.nav-cv-btn) {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
