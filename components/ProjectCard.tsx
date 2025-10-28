// components/ProjectCard.tsx
import Image from "next/image";
import { Project } from "@/data/projects";
import styles from "@/styles/ProjectCard.module.css";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
        />
        <div className={styles.imageOverlay} />
      </div>

      <div className={styles.content}>
        <div>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
        </div>

        <div className={styles.tech}>
          {project.tech.map((t) => (
            <span key={t} className={styles.tag}>
              {t}
            </span>
          ))}
        </div>

        <div className={styles.actions}>
          {project.demoUrl && (
            <a
              className={`${styles.action} ${styles.primary}`}
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          )}
          {project.repoUrl && (
            <a
              className={styles.action}
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
