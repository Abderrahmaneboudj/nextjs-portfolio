// app/projects/page.tsx
import ProjectCard from "../../components/ProjectCard";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <>
      <h1>Projects</h1>
      <p>Collection of personal and collaborative projects.</p>

      <section
        style={{
          display: "grid",
          gap: "1rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          marginTop: 12,
        }}
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </section>
    </>
  );
}
