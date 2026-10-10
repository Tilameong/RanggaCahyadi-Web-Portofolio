"use client";

import React, { useState, useEffect } from "react";
import { Download, Menu, X, Layout, Layers } from "lucide-react";

export default function Navbar({ onDownloadCv }: { onDownloadCv: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tentang", href: "#tentang" },
    { name: "Pendidikan", href: "#pendidikan" },
    { name: "Pengalaman", href: "#pengalaman" },
    { name: "Sertifikat", href: "#sertifikat" },
    { name: "Keahlian", href: "#keahlian" },
    { name: "Kontak", href: "#kontak" },
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
            }}
          >
            <Layers size={20} color="#ffffff" />
          </div>
          <div>
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.01em",
              }}
            >
              Rangga Cahyadi
            </div>
            <div
              style={{
                fontSize: "0.72rem",
                color: "var(--indigo-light)",
                fontFamily: "var(--font-mono)",
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
            gap: "26px",
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
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

        {/* Action Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            onClick={onDownloadCv}
            className="btn-primary"
            style={{
              padding: "9px 16px",
              fontSize: "0.86rem",
            }}
          >
            <Download size={15} />
            <span>Unduh CV</span>
          </button>

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
        </div>
      )}

      <style jsx>{`
        @media (min-width: 860px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
