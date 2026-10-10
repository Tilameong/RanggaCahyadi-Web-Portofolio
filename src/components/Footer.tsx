import React from "react";
import { ArrowUp, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { GithubIcon, HackerRankIcon } from "./SocialIcons";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container-custom">
        <div className="footer-inner">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Layers size={18} color="#ffffff" />
            </div>
            <div className="footer-brand-text">
              <div className="footer-name">
                Rangga Cahyadi
              </div>
              <div className="footer-tagline">
                {t.tagline}
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <a
              href="https://github.com/Tilameong"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{
                padding: "7px 12px",
                fontSize: "0.82rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                textDecoration: "none",
                borderRadius: "6px",
              }}
              title="GitHub Profile"
            >
              <GithubIcon size={16} color="#ffffff" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.hackerrank.com/profile/tilameorangga"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{
                padding: "7px 12px",
                fontSize: "0.82rem",
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                textDecoration: "none",
                borderRadius: "6px",
                color: "#00ea64",
                borderColor: "rgba(0, 234, 100, 0.25)",
              }}
              title="HackerRank Profile"
            >
              <HackerRankIcon size={16} />
              <span style={{ color: "#ffffff" }}>HackerRank</span>
            </a>
          </div>

          {/* Clean Back to top */}
          <button
            onClick={scrollToTop}
            className="btn-ghost footer-top-btn"
          >
            <span>{t.backToTop}</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Clean Copyright Line */}
        <div className="footer-copy">
          {t.copyright}
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          border-top: 1px solid var(--border-subtle);
          background: rgba(9, 13, 22, 0.98);
          padding: 32px 0 24px;
          position: relative;
          z-index: 10;
        }

        .footer-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 20px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer-logo {
          width: 34px;
          height: 34px;
          border-radius: 8px;
          background: linear-gradient(135deg, #6366f1, #f97316);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .footer-brand-text {
          text-align: left;
        }

        .footer-name {
          font-weight: 700;
          color: #ffffff;
          font-size: 0.95rem;
        }

        .footer-tagline {
          font-size: 0.75rem;
          color: var(--indigo-light);
          font-family: var(--font-mono);
        }

        .footer-top-btn {
          padding: 7px 14px;
          font-size: 0.82rem;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .footer-copy {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 16px;
          text-align: center;
          font-size: 0.8rem;
          color: var(--text-dim);
        }

        @media (max-width: 768px) {
          .site-footer {
            padding: 24px 0 20px;
          }

          .footer-inner {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            gap: 14px;
            margin-bottom: 16px;
          }

          .footer-brand {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            gap: 8px;
          }

          .footer-brand-text {
            text-align: center;
          }

          .footer-top-btn {
            margin: 0 auto;
          }

          .footer-copy {
            text-align: center;
            font-size: 0.76rem;
            padding-top: 12px;
          }
        }
      `}</style>
    </footer>
  );
}
