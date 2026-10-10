"use client";

import React from "react";
import { CheckCircle2, Sparkles, X } from "lucide-react";

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export default function ToastNotification({ message, onClose }: ToastProps) {
  if (!message) return null;

  return (
    <div className="toast-cyber">
      <CheckCircle2 size={20} color="var(--orange-400)" />
      <span style={{ fontWeight: 500 }}>{message}</span>
      <button
        onClick={onClose}
        style={{
          background: "transparent",
          border: "none",
          color: "var(--text-muted)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          padding: "2px",
          marginLeft: "8px",
        }}
      >
        <X size={16} />
      </button>
    </div>
  );
}
