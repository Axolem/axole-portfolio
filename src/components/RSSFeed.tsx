"use client";

import { toast } from "sonner";
import { Rss } from "lucide-react";
import { Button } from "@/components/ui/button";

export const RSSFeed = () => {
  const downloadRSS = async () => {
    try {
      const res = await fetch("/api/rss.xml");

      if (!res.ok) {
        throw new Error("Failed to get rss at the moment.");
      }

      const blob = await res.blob();

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "axolemaranjana-blog.xml";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast.success("RSS Feed Downloaded", {
        description: "The RSS feed has been successfully downloaded.",
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("Download Failed", {
        description: "There was an error generating the RSS feed.",
      });
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={downloadRSS}
      className="flex items-center gap-2"
    >
      <Rss size={16} />
      <span>RSS Feed</span>
    </Button>
  );
};
