// app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section
        style={{
          display: "flex",
          gap: 20,
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <div
          style={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src="/images/profile.jpg"
            alt="Profile"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div>
          <h1 style={{ marginBottom: 8 }}>Hello — I am abderrahmane</h1>
          <p style={{ marginBottom: 12 }}>
            I am a frontend developer who builds accessible, responsive websites
            using Next.js and TypeScript.
          </p>
          <p>
            <Link href="/projects">See my projects →</Link>
          </p>
        </div>
      </section>

      <section>
        <h2>Featured</h2>
        <div
          style={{
            display: "grid",
            gap: 12,
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            marginTop: 12,
          }}
        >
          <div
            style={{
              padding: 12,
              border: "1px solid rgba(0,0,0,0.06)",
              borderRadius: 8,
            }}
          >
            <h3>Featured Project</h3>
            <p>Short blurb about an important project.</p>
          </div>
          <div
            style={{
              padding: 12,
              border: "1px solid rgba(0,0,0,0.06)",
              borderRadius: 8,
            }}
          >
            <h3>Another Highlight</h3>
            <p>Short blurb about skills or work.</p>
          </div>
        </div>
      </section>
    </>
  );
}
