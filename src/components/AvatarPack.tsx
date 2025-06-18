// AvatarPack.tsx
import React, { useMemo } from "react";
import { hierarchy, pack as d3pack, HierarchyNode } from "d3";
import Image from "next/image";

export interface AvatarData {
  id: string | number;
  url: string;
  weight: number; // relative “size” for packing, e.g. contribution count
  alt: string;
}

interface Props {
  data: AvatarData[];
  diameter?: number; // bounding circle diameter in px (default: 300)
  padding?: number; // padding between circles (default: 4)
}

export default function AvatarPack({
  data,
  diameter = 300,
  padding = 5,
}: Props) {
  // Build a dummy root with children = avatars
  const root = useMemo(() => {
    const rootNode = hierarchy<AvatarData | { children: AvatarData[] }>({
      children: data,
    })
      .sum((d) => ("weight" in d ? d.weight : 0))
      .sort((a, b) => (b.value ?? 0) - (a.value ?? 0));

    return d3pack<AvatarData>()
      .size([diameter, diameter])
      .padding(padding)(rootNode as HierarchyNode<AvatarData>)
      .leaves();
  }, [data, diameter, padding]);

  return (
    <div className="bg-radial from-accent/30 to-transparent to-70% rounded-full p-20">
      <div
        className={`relative overflow-hidden rounded-full`}
        style={{
          width: diameter,
          height: diameter,
        }}
      >
        {root.map((node) => {
          const { x, y, r } = node;
          return (
            <Image
              key={node.data.id}
              src={node.data.url}
              unoptimized
              width={50}
              height={50}
              alt={node.data.alt}
              className="absolute object-cover"
              style={{
                width: r * 2,
                height: r * 2,
                left: x - r,
                top: y - r,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
