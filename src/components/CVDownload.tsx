"use client";

import posthog from "posthog-js";
import { Download } from "lucide-react";

export const CVDownload = () => {
  const handleDownload = () => {
    const cvUrl = "/axole-maranjana-cv.pdf"; // Replace with actual CV URL
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Axole_Maranjana_CV.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    posthog.capture("download_cv");
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg text-white transition-colors"
    >
      <Download size={20} />
      Download CV
    </button>
  );
};
