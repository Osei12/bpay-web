"use client";

import { useEffect, useState } from "react";

let savedPrompt: any = null; // store globally so it persists across reloads

export function usePWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(savedPrompt);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      savedPrompt = e;
      setDeferredPrompt(e);
      console.log("📲 beforeinstallprompt fired");
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const promptInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    console.log("Install outcome:", outcome);
    savedPrompt = null;
    setDeferredPrompt(null);
  };

  return { deferredPrompt, promptInstall };
}
