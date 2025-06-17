import React from "react";
import AvatarPack, { AvatarData } from "../AvatarPack";
import { twMerge } from "tailwind-merge";

const supporters: AvatarData[] = [
  { id: 1, url: "/svgs/adobe-photoshop.svg", weight: 1 },
  { id: 2, url: "/svgs/blender.svg", weight: 1 },
  { id: 3, url: "/svgs/canva.svg", weight: 1 },
  { id: 4, url: "/svgs/figma.svg", weight: 2 },
  { id: 5, url: "/svgs/inkscape.svg", weight: 1 },
  { id: 6, url: "/svgs/notion.svg", weight: 2 },
  { id: 7, url: "/svgs/sketch.svg", weight: 1 },
  { id: 8, url: "/svgs/trello.svg", weight: 1 },
  { id: 9, url: "/svgs/dropbox.svg", weight: 1 },
  { id: 10, url: "/svgs/slack.svg", weight: 1 },
  { id: 11, url: "/svgs/google-drive.svg", weight: 2 },
];

export default function SkillsSection({ className }: { className?: string }) {
  return (
    <section className={twMerge(className)} id="skills">
      <div className="flex justify-center items-center pt-24">
        <AvatarPack data={supporters} diameter={400}></AvatarPack>
      </div>
    </section>
  );
}
