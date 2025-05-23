"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    ktt10?: {
      setup: (options: { id: string; accountId: string; color: string }) => void;
    };
  }
}

export default function ChatWidget() {
  useEffect(() => {
    // Prevent duplicate script injection
    if (document.getElementById("chatrace-widget")) return;

    const script = document.createElement("script");
    script.src = "https://chatrace.com/webchat/plugin.js?v=6";
    script.defer = true;
    script.id = "chatrace-widget";
    script.onload = () => {
      if (typeof window.ktt10 !== "undefined") {
        window.ktt10.setup({
          id: "Ql0dKWwmoKt",
          accountId: "1540232",
          color: "#006dff",
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return null;
}
