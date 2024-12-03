export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Project 3: SSIT Campus Connect",
    year: 2024,
    description:
      "Designed a user-centric college website for students and faculty to register for events, share articles, and navigate campus information.",
    url: "https://github.com/Aafhana/major-project",
  },
  {
    title: "Project Two: Smart Summarizer",
    year: 2023,
    description:
      "Developed a Chrome extension to summarize lengthy texts and video content using a transformer AI model and Flask web application.",
    url: "https://github.com/Aafhana/summarizer_extension",
  },
  {
    title: "Project 1: Virtual Assistant",
    year: 2021,
    description:
      " Built a chatbot to assist in health-related inquiries using a two-layer neural network trained on specific datasets.",
    url: "https://github.com/Aafhana/Virtual-Assistant-using-AI",
  },
];
