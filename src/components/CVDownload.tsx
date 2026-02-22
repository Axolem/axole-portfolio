"use client";

import { Download } from "lucide-react";
import posthog from "posthog-js";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";

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

	const handleDownloadJson = () => {
		const cvUrl = "/cv.json";
		const link = document.createElement("a");
		link.href = cvUrl;
		link.download = "Axole_Maranjana_CV.json";
		link.target = "_blank";
		link.rel = "noopener noreferrer";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
		posthog.capture("download_cv_json");
	};

	return (
		<ButtonGroup>
			<Button onClick={handleDownload}>
				<Download size={20} />
				Download CV (PDF)
			</Button>
			<Button variant="outline" onClick={handleDownloadJson}>
				JSON
			</Button>
		</ButtonGroup>
	);
};
