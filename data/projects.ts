// data/projects.ts
export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string; // path under /images
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Movie App",
    description:
      "🎬 Movie App: Quick OverviewThe movie app helps users discover, stream, and track films and TV shows they love.It solves the hassle of finding what to watch, keeping up with favorites, and exploring new releases.Your go-to guide for entertainment—anytime, anywhere.",
    tech: ["Next.js", "TypeScript", "CSS Modules"],
    image: "/images/project-2.jpg",
    demoUrl: "https://itspopcorntime.netlify.app/",
    repoUrl: "https://github.com/Abderrahmaneboudj/movie-app.git",
  },
  {
    id: "project-2",
    title: "Music App",
    description:
      "🌦️ The weather app gives real-time forecasts and alerts based on your locationn It helps you plan your day, stay safe during severe weather, and avoid surprises.Quick, reliable, and always up to date—your personal weather guide",
    tech: ["React", "Node", "Postgres"],
    image: "/images/project-1.jpg",
    repoUrl: "https://github.com/Abderrahmaneboudj/music-app.git",
  },
];
