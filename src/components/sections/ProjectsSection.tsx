"use client";

import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Button from "../Button";
import Project from "../Project";

const projects = [
  {
    id: 1,
    title: "Delicious Donuts",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rerum velitnam officiis totam laboriosam ipsa soluta perspiciatis consequatur vitae alias corporis, cupiditate voluptatem voluptas sunt. Debitis temporibus excepturi atque!",
    img: {
      url: "/donut.png",
      alt: "Logo design for Delicious Donuts featuring a pink frosted donut with sprinkles",
    },
  },
  {
    id: 2,
    title: "Naturea",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rerum velitnam officiis totam laboriosam ipsa soluta perspiciatis consequatur vitae alias corporis, cupiditate voluptatem voluptas sunt. Debitis temporibus excepturi atque!",
    img: {
      url: "/naturea.png",
      alt: "Logo design for Naturea featuring a green leaf icon symbolizing nature and sustainability",
    },
  },
  {
    id: 3,
    title: "Digital Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rerum velitnam officiis totam laboriosam ipsa soluta perspiciatis consequatur vitae alias corporis, cupiditate voluptatem voluptas sunt. Debitis temporibus excepturi atque!",
    img: {
      url: "/digital-marketing.png",
      alt: "Digital marketing poster design with bold typography and abstract orange shapes",
    },
  },
  {
    id: 4,
    title: "Donut",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rerum velitnam officiis totam laboriosam ipsa soluta perspiciatis consequatur vitae alias corporis, cupiditate voluptatem voluptas sunt. Debitis temporibus excepturi atque!",
    img: {
      url: "/donut.png",
      alt: "Logo design for Delicious Donuts featuring a pink frosted donut with sprinkles",
    },
  },
  {
    id: 5,
    title: "Naturea",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe rerum velitnam officiis totam laboriosam ipsa soluta perspiciatis consequatur vitae alias corporis, cupiditate voluptatem voluptas sunt. Debitis temporibus excepturi atque!",
    img: {
      url: "/naturea.png",
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
