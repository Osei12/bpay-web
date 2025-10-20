"use client";
import { useEffect, useState } from "react";
import { usePWAInstall } from "@/hooks/use-pwa-install";

export default function InstallPWABanner() {
  const { deferredPrompt, promptInstall } = usePWAInstall();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (deferredPrompt) {
      setIsVisible(true);
    }
  }, [deferredPrompt]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 z-50 animate-fade-in">
      <span className="text-sm font-medium">
        Install BPay for faster access 🚀
      </span>
      <button
        onClick={promptInstall}
        className="bg-white text-blue-600 px-3 py-1 rounded-lg font-semibold text-sm"
      >
        Install
      </button>
      <button
        onClick={() => setIsVisible(false)}
        className="text-white text-sm ml-2"
      >
        ✕
      </button>
    </div>
  );
}

// "use client";
// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function InstallPWABanner() {
//   const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
//   const [showBanner, setShowBanner] = useState(false);

//   useEffect(() => {
//     const handleBeforeInstallPrompt = (e: Event) => {
//       e.preventDefault();
//       setDeferredPrompt(e);
//       setShowBanner(true);
//     };

//     window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

//     window.addEventListener("appinstalled", () => {
//       console.log("✅ App installed");
//       setShowBanner(false);
//     });

//     return () => {
//       window.removeEventListener(
//         "beforeinstallprompt",
//         handleBeforeInstallPrompt
//       );
//     };
//   }, []);

//   const handleInstall = async () => {
//     if (!deferredPrompt) return;

//     deferredPrompt.prompt();
//     const { outcome } = await deferredPrompt.userChoice;

//     console.log(
//       `User ${outcome === "accepted" ? "accepted" : "dismissed"} install prompt`
//     );
//     setDeferredPrompt(null);
//     setShowBanner(false);
//   };

//   const handleDismiss = () => {
//     setShowBanner(false);
//     localStorage.setItem("pwa-dismissed", "true");
//   };

//   // Hide banner if user previously dismissed it
//   useEffect(() => {
//     const dismissed = localStorage.getItem("pwa-dismissed");
//     if (dismissed) setShowBanner(false);
//   }, []);

//   return (
//     <AnimatePresence>
//       {showBanner && (
//         <motion.div
//           initial={{ y: 100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           exit={{ y: 100, opacity: 0 }}
//           transition={{ duration: 0.3 }}
//           className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0"
//         >
//           <div>
//             <p className="text-base font-semibold">Install our app</p>
//             <p className="text-sm text-gray-600">
//               Get faster access and offline support
//             </p>
//           </div>
//           <div className="flex items-center gap-2">
//             <button
//               onClick={handleDismiss}
//               className="text-gray-500 hover:text-gray-700 text-sm font-medium"
//             >
//               Maybe later
//             </button>
//             <button
//               onClick={handleInstall}
//               className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800"
//             >
//               Install
//             </button>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }
