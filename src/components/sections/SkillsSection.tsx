"use client";

import { useEffect, useState } from "react";
import AvatarPack, { AvatarData } from "../AvatarPack";
import { twMerge } from "tailwind-merge";

const supporters: AvatarData[] = [
  {
    alt: "Logo of Adobe Photoshop",
    id: 1,
    url: "/svgs/adobe-photoshop.svg",
    weight: 1,
  },
  { alt: "Logo of Blender", id: 2, url: "/svgs/blender.svg", weight: 1 },
  { alt: "Logo of Canva", id: 3, url: "/svgs/canva.svg", weight: 1 },
  { alt: "Logo of Figma", id: 4, url: "/svgs/figma.svg", weight: 2 },
  { alt: "Logo of Inkscape", id: 5, url: "/svgs/inkscape.svg", weight: 1 },
  { alt: "Logo of Notion", id: 6, url: "/svgs/notion.svg", weight: 2 },
  { alt: "Logo of Sketch", id: 7, url: "/svgs/sketch.svg", weight: 1 },
  { alt: "Logo of Trello", id: 8, url: "/svgs/trello.svg", weight: 1 },
  { alt: "Logo of Dropbox", id: 9, url: "/svgs/dropbox.svg", weight: 1 },
  { alt: "Logo of Slack", id: 10, url: "/svgs/slack.svg", weight: 1 },
  {
    alt: "Logo of Google Drive",
    id: 11,
    url: "/svgs/google-drive.svg",
    weight: 2,
  },
];

export default function SkillsSection({ className }: { className?: string }) {
  const [viewportSize, setViewportSize] = useState(0);

  useEffect(() => {
    setViewportSize(window.innerWidth);
  }, []);

  return (
    <section className={twMerge(className)} id="skills">
      <div className="flex justify-center items-center pt-24">
        <AvatarPack
          data={supporters}
          diameter={viewportSize > 640 ? 400 : viewportSize > 400 ? 300 : 250}
        ></AvatarPack>
      </div>
    </section>
  );
}
