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
      <h1 className="mb-8 text-2xl font-medium tracking-tight">About me?</h1>
       <p>hey there, this is afreed ahamed , a passionate engineer and gold-dgger</p>
      </div>
    </section>
  );
}
