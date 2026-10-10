"use client";

import React, { useState } from "react";
import { Terminal as TerminalIcon, Sparkles } from "lucide-react";

export default function TerminalWidget() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<Array<{ command: string; output: React.ReactNode }>>([
    {
      command: "whoami",
      output: (
        <div>
          <span style={{ color: "var(--purple-400)" }}>[USER]</span> Rangga Cahyadi <br />
          <span style={{ color: "var(--orange-400)" }}>[ROLE]</span> IT Technical Support & IT Administrator <br />
          <span style={{ color: "#34d399" }}>[ALMA MATER]</span> D3 Manajemen Informatika - Politeknik Negeri Lampung <br />
          <span style={{ color: "#38bdf8" }}>[LOCATION]</span> Bandung, Jawa Barat, Indonesia
        </div>
      ),
    },
    {
      command: "cat current_status.sh",
      output: (
        <div>
          STATUS: <span style={{ color: "#34d399" }}>Active & Open for Opportunities</span><br />
          FOCUS: PC/Printer/CCTV Diagnostics, Cisco Routing & Switching, IT Administration, Data Management
        </div>
      ),
    },
  ]);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let res: React.ReactNode = null;

    if (cleanCmd === "help") {
      res = (
        <div style={{ color: "#cbd5e1" }}>
          Perintah yang tersedia:<br />
          • <span style={{ color: "var(--orange-400)" }}>whoami</span> : Menampilkan identitas profil<br />
          • <span style={{ color: "var(--orange-400)" }}>skills</span> : Menampilkan ringkasan keahlian teknis<br />
          • <span style={{ color: "var(--orange-400)" }}>certs</span> : Menampilkan daftar sertifikat Cisco & Oracle<br />
          • <span style={{ color: "var(--orange-400)" }}>contact</span> : Menampilkan saluran kontak langsung<br />
          • <span style={{ color: "var(--orange-400)" }}>clear</span> : Membersihkan layar terminal
        </div>
      );
    } else if (cleanCmd === "whoami") {
      res = (
        <div>
          <span style={{ color: "var(--purple-400)" }}>[USER]</span> Rangga Cahyadi <br />
          <span style={{ color: "var(--orange-400)" }}>[ROLE]</span> IT Technical Support & IT Administrator <br />
          <span style={{ color: "#34d399" }}>[ALMA MATER]</span> Politeknik Negeri Lampung (D3 Manajemen Informatika)
        </div>
      );
    } else if (cleanCmd === "skills") {
      res = (
        <div>
          <span style={{ color: "var(--orange-400)" }}>HARDWARE:</span> PC, Printer, CCTV Troubleshooting, Maintenance<br />
          <span style={{ color: "var(--purple-400)" }}>NETWORKING:</span> LAN, WLAN, VLAN, Cisco Routing/Switching, MikroTik<br />
          <span style={{ color: "#38bdf8" }}>SOFTWARE:</span> MS Excel (Pivot, HLOOKUP), HTML/CSS/JS, SQL, C#, Canva, Figma
        </div>
      );
    } else if (cleanCmd === "certs") {
      res = (
        <div>
          1. CCNA Introduction to Networks (Cisco)<br />
          2. CCNA Switching, Routing, and Wireless Essentials (Cisco)<br />
          3. Cisco Introduction to Cybersecurity<br />
          4. Oracle Academy Course Certificate<br />
          5. TOEIC English Certificate (Skor: 670)
        </div>
      );
    } else if (cleanCmd === "contact") {
      res = (
        <div>
          Email: <span style={{ color: "var(--purple-400)" }}>tilameorangga@gmail.com</span><br />
          WhatsApp: <span style={{ color: "var(--orange-400)" }}>0815-3923-5487</span><br />
          Lokasi: Bandung, Jawa Barat
        </div>
      );
    } else if (cleanCmd === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    } else if (cleanCmd === "") {
      return;
    } else {
      res = (
        <span style={{ color: "#f87171" }}>
          Command &apos;{cmd}&apos; tidak dikenali. Ketik &apos;help&apos; untuk melihat perintah yang tersedia.
        </span>
      );
    }

    setHistory((prev) => [...prev, { command: cmd, output: res }]);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
    }
  };

  return (
    <div
      className="glass-card"
      style={{
        borderRadius: "14px",
        overflow: "hidden",
        border: "1px solid rgba(139, 92, 246, 0.3)",
        boxShadow: "0 15px 40px rgba(0, 0, 0, 0.6), 0 0 20px rgba(139, 92, 246, 0.15)",
        fontFamily: "var(--font-mono)",
      }}
    >
      {/* Terminal Titlebar */}
      <div
        style={{
          background: "rgba(10, 12, 22, 0.95)",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ef4444" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#f59e0b" }} />
          <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#10b981" }} />
          <span
            style={{
              fontSize: "0.78rem",
              color: "#94a3b8",
              marginLeft: "10px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <TerminalIcon size={14} color="#a855f7" />
            rangga@it-station:~
          </span>
        </div>

        {/* Quick Quick action buttons */}
        <div style={{ display: "flex", gap: "6px" }}>
          {["whoami", "skills", "certs", "contact", "clear"].map((qCmd) => (
            <button
              key={qCmd}
              onClick={() => handleCommand(qCmd)}
              style={{
                background: "rgba(139, 92, 246, 0.15)",
                border: "1px solid rgba(139, 92, 246, 0.3)",
                color: "#c084fc",
                fontSize: "0.72rem",
                borderRadius: "4px",
                padding: "2px 8px",
                cursor: "pointer",
                fontFamily: "var(--font-mono)",
              }}
            >
              {qCmd}
            </button>
          ))}
        </div>
      </div>

      {/* Terminal Body */}
      <div
        style={{
          padding: "18px 20px",
          background: "rgba(6, 8, 15, 0.92)",
          minHeight: "220px",
          maxHeight: "340px",
          overflowY: "auto",
          fontSize: "0.85rem",
          lineHeight: 1.6,
        }}
      >
        {history.map((item, index) => (
          <div key={index} style={{ marginBottom: "14px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--purple-400)" }}>
              <span style={{ color: "var(--orange-500)" }}>rangga@it-admin:~$</span>
              <span style={{ color: "#ffffff", fontWeight: 600 }}>{item.command}</span>
            </div>
            <div style={{ marginTop: "4px", color: "#e2e8f0", paddingLeft: "4px" }}>
              {item.output}
            </div>
          </div>
        ))}

        {/* Active Input Line */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ color: "var(--orange-500)" }}>rangga@it-admin:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="ketik perintah (contoh: skills, certs, whoami)..."
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#34d399",
              fontFamily: "var(--font-mono)",
              fontSize: "0.85rem",
              flex: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
}
