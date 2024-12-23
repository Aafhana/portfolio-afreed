import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <div>
        <h1 className="mb-8 text-2xl font-medium tracking-tight">About Me</h1>
        <p>
          Hello! I'm Afreed Ahamed, a dedicated and innovative engineer with a strong passion for technology and problem-solving. With a degree in Computer Science and Engineering, I have honed my skills in software development, competitive programming, and project management. My journey includes creating impactful solutions and driving successful projects that make a real difference. I'm an enthusiastic team player who thrives in collaborative environments and enjoys taking on new challenges. Let's connect and create something extraordinary together.
        </p>
      </div>
    </section>
  );
}

