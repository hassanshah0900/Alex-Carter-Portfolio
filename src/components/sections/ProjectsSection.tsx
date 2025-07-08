"use client";

import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../Button";
import Project from "../Project";

const projects = [
  {
    id: 1,
    title: "Delicious Donuts",
    desc: "Designed to capture the playful spirit of a modern donut brand, this logo uses bold colors, clean lines, and a sprinkle-filled icon to evoke warmth and craveability. The rounded typography complements the donut shape, reinforcing the brand’s fun and friendly identity.",
    img: {
      url: "/donut.png",
      alt: "Logo design for Delicious Donuts featuring a pink frosted donut with sprinkles",
    },
  },
  {
    id: 2,
    title: "Naturea",
    desc: "This clean and minimal logo was made for a brand that promotes eco-friendly products or nature-based services. The soft green tones and leaf symbol reflect freshness, growth, and a deep connection with nature.",
    img: {
      url: "/naturea.png",
      alt: "Logo design for Naturea featuring a green leaf icon symbolizing nature and sustainability",
    },
  },
  {
    id: 3,
    title: "Digital Marketing",
    desc: "This bold and modern design highlights the dynamic nature of digital marketing. The warm colors and abstract shapes create energy and movement, reflecting creativity and innovation in the online space.",
    img: {
      url: "/digital-marketing.png",
      alt: "Digital marketing poster design with bold typography and abstract orange shapes",
    },
  },
  {
    id: 4,
    title: "Eco Cafe",
    desc: "This eco-friendly café logo combines a coffee cup with a leaf to reflect sustainability and freshness. The green tones and minimalist style give it a clean, natural feel—perfect for a brand focused on organic or environmentally conscious offerings.",
    img: {
      url: "/eco-cafe.png",
      alt: "Logo design for Delicious Donuts featuring a pink frosted donut with sprinkles",
    },
  },
  {
    id: 5,
    title: "Fit Body",
    desc: "This bold and modern logo was designed for a fitness brand focused on strength and movement. The dumbbell icon and strong typography reflect energy, discipline, and a commitment to a healthy lifestyle.",
    img: {
      url: "/fit-body.png",
      alt: "Logo design for Naturea featuring a green leaf icon symbolizing nature and sustainability",
    },
  },
];

export default function ProjectsSection({ className }: { className?: string }) {
  const [isShowingAll, setShowingAll] = useState(false);
  const ref = useRef<HTMLSelectElement>(null);
  const filteredProjects = isShowingAll ? projects : projects.slice(0, 2);
  return (
    <section
      ref={ref}
      className={twMerge(
        "space-y-20 xs:space-y-28 sm:space-y-40 relative",
        className
      )}
      id="projects"
    >
      {filteredProjects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          description={project.desc}
          img={project.img}
          alignment={project.id % 2 === 0 ? "right" : "left"}
        />
      ))}
      <Button
        onClick={(e) => {
          setShowingAll(!isShowingAll);
        }}
        className={`bottom-5 left-1/2 -translate-x-1/2 z-40 ${
          isShowingAll ? "sticky " : "absolute"
        }`}
      >
        {isShowingAll ? "See Less" : "See More"}
      </Button>
    </section>
  );
}
