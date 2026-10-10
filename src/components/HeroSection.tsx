"use client";

import React from "react";
import Image from "next/image";
import {
  Download,
  MessageSquare,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { GithubIcon, HackerRankIcon, InstagramIcon } from "./SocialIcons";

interface HeroSectionProps {
  onDownloadCv: () => void;
  onOpenContact: () => void;
}

export default function HeroSection({
  onDownloadCv,
  onOpenContact,
}: HeroSectionProps) {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section id="tentang" className="hero-section">
      <div className="container-custom">
        <div className="hero-grid">
          {/* Left Column on Desktop: Text & Information (Lebih Lebar) */}
          <div className="hero-content-col">
            {/* Top Status Pill */}
            <div className="hero-status-badge">
              <span className="status-dot-pulse" style={{ flexShrink: 0 }} />
              <span>{t.statusBadge}</span>
            </div>

            {/* Name */}
            <h1 className="hero-title">
              {t.name}
            </h1>

            {/* Professional Headline (Pengganti info kontak yang berulang) */}
            <div className="hero-headline">
              {t.headline}
            </div>

            {/* Value-Driven Professional Profile Summary */}
            <p className="hero-bio">
              {t.bio}
            </p>

            {/* 4 Value Pillars: Informatif, Padat, & Menjual */}
            <div className="hero-points-grid">
              <div className="hero-point-item">
                <CheckCircle size={15} color="var(--orange-light)" style={{ flexShrink: 0 }} />
                <span>{t.pillars[0]}</span>
              </div>

              <div className="hero-point-item">
                <CheckCircle size={15} color="var(--indigo-light)" style={{ flexShrink: 0 }} />
                <span>{t.pillars[1]}</span>
              </div>

              <div className="hero-point-item">
                <CheckCircle size={15} color="#34d399" style={{ flexShrink: 0 }} />
                <span>{t.pillars[2]}</span>
              </div>

              <div className="hero-point-item">
                <CheckCircle size={15} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>{t.pillars[3]}</span>
              </div>
            </div>

            {/* Action Buttons: Clean & Direct */}
            <div className="hero-btn-group">
              <button
                onClick={onDownloadCv}
                className="btn-primary"
                id="btn-hero-download"
              >
                <Download size={16} />
                <span>{t.btnDownload}</span>
              </button>

              <button
                onClick={onOpenContact}
                className="btn-secondary"
              >
                <MessageSquare size={16} />
                <span>{t.btnContact}</span>
              </button>

              <a
                href="#pengalaman"
                className="btn-ghost"
              >
                <span>{t.btnExplore}</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Direct External Profiles */}
            <div
              className="hero-profiles-group"
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "10px",
                marginTop: "16px",
              }}
            >
              <span
                style={{
                  fontSize: "0.78rem",
                  color: "var(--text-muted)",
                  fontFamily: "var(--font-mono)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {lang === "in" ? "Profil Online:" : "Online Profiles:"}
              </span>

              <a
                href="https://github.com/Tilameong"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{
                  padding: "6px 12px",
                  fontSize: "0.8rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  textDecoration: "none",
                  borderRadius: "6px",
                }}
                title="Lihat GitHub Profil"
              >
                <GithubIcon size={15} color="#ffffff" />
                <span>GitHub</span>
              </a>

              <a
                href="https://www.hackerrank.com/profile/tilameorangga"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{
                  padding: "6px 12px",
                  fontSize: "0.8rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  textDecoration: "none",
                  borderRadius: "6px",
                  borderColor: "rgba(0, 234, 100, 0.3)",
                  color: "#00ea64",
                }}
                title="Lihat Profil HackerRank"
              >
                <HackerRankIcon size={15} />
                <span style={{ color: "#ffffff" }}>HackerRank</span>
              </a>

              <a
                href="https://www.instagram.com/tilameocahyadi/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                style={{
                  padding: "6px 12px",
                  fontSize: "0.8rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "7px",
                  textDecoration: "none",
                  borderRadius: "6px",
                  borderColor: "rgba(236, 72, 153, 0.35)",
                  color: "#f472b6",
                }}
                title="Instagram Rangga Cahyadi (@tilameocahyadi)"
              >
                <InstagramIcon size={15} color="#f472b6" />
                <span style={{ color: "#ffffff" }}>Instagram</span>
              </a>
            </div>
          </div>

          {/* Right Column on Desktop: Photo Card (Posisi Kanan) */}
          <div className="hero-photo-col">
            <div className="hero-photo-card">
              {/* Photo Frame Container (Aspect Ratio Presisi 2/3 Anti-Stretch) */}
              <div className="hero-image-container">
                <Image
                  src="/assets/Pas Photo/Potret Profesional dengan Logo Microsoft.png"
                  alt="Rangga Cahyadi - Potret Profesional IT Support & Administration"
                  width={900}
                  height={1350}
                  priority
                  sizes="(max-width: 768px) 280px, 320px"
                  style={{
                    width: "100%",
                    height: "100%",
                    aspectRatio: "2 / 3",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                    borderRadius: "12px",
                  }}
                />

                {/* Subtle bottom shadow overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(180deg, transparent 78%, rgba(15, 23, 42, 0.75) 100%)",
                    pointerEvents: "none",
                    borderRadius: "12px",
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
          aspect-ratio: 2 / 3;
          width: 100%;
          background: #0d1322;
          display: flex;
          align-items: center;
          justify-content: center;
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
          margin-bottom: 6px;
          word-break: break-word;
          max-width: 100%;
        }

        .hero-headline {
          font-size: 1rem;
          color: var(--indigo-light);
          font-family: var(--font-mono);
          font-weight: 600;
          margin-bottom: 18px;
          letter-spacing: 0.02em;
        }

        .hero-bio {
          color: var(--text-secondary);
          font-size: 0.98rem;
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
            max-width: min(280px, 85vw);
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
            max-width: 100%;
          }

          .hero-title {
            text-align: center;
            font-size: 1.85rem;
          }

          .hero-headline {
            text-align: center;
            font-size: 0.85rem;
            margin-bottom: 14px;
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

          .hero-profiles-group {
            justify-content: center;
            width: 100%;
            max-width: 320px;
            margin: 14px auto 0;
          }
        }
      `}</style>
    </section>
  );
}
