"use client";

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
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
    >
      <Download size={20} />
      Download CV
    </button>
  );
};
