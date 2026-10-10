"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificatesSection from "@/components/CertificatesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ToastNotification from "@/components/ToastNotification";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((current) => (current === msg ? null : current));
    }, 4000);
  };

  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = "/assets/CV/CV-Rangga_Cahyadi-IT-Admin-IN.pdf";
    link.download = "CV-Rangga_Cahyadi-IT-Admin-IN.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast("Dokumen CV resmi (.pdf) sedang diunduh!");
  };

  const scrollToContact = () => {
    const el = document.getElementById("kontak");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      {/* Animated Tech Preloader */}
      <LoadingScreen />

      {/* Cyber ambient background overlay */}
      <div className="cyber-bg-overlay" />

      {/* Main Navigation */}
      <Navbar onDownloadCv={handleDownloadCv} />

      {/* Hero Section */}
      <HeroSection
        onDownloadCv={handleDownloadCv}
        onOpenContact={scrollToContact}
      />

      {/* About & Education & Terminal */}
      <AboutSection />

      {/* Skills Matrix */}
      <SkillsSection />

      {/* Work Experiences */}
      <ExperienceSection />

      {/* Certificates & PDF Viewer */}
      <CertificatesSection />

      {/* Projects & Practical Case Studies */}
      <ProjectsSection />

      {/* Contact & Direct Actions */}
      <ContactSection
        onDownloadCv={handleDownloadCv}
        showToast={showToast}
      />

      {/* Footer */}
      <Footer />

      {/* Floating Action WhatsApp */}
      <FloatingWhatsApp />

      {/* Floating Toast Notification */}
      <ToastNotification
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </main>
  );
}
