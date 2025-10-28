// app/layout.tsx
import "../styles/globals.css";
import styles from "../styles/layout.module.css";
import Link from "next/link";

export const metadata = {
  title: "My Portfolio",
  description: "Techy glass portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="app-shell">
        <header className={styles.header}>
          <div className={`${styles.navWrap} container`}>
            <div className={styles.logo}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: "linear-gradient(135deg,#6f6cff,#2dd4bf)",
                }}
              />
              <span>My Portfolio</span>
            </div>

            <nav className={styles.navlinks}>
              <Link className={styles.link} href="/">
                Home
              </Link>
              <Link className={styles.link} href="/about">
                About
              </Link>
              <Link className={styles.link} href="/projects">
                Projects
              </Link>
              <Link className={styles.link} href="/contact">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main className={`${styles.main} container`}>{children}</main>

        <footer className={styles.footer + " container"}>
          <div className="card" style={{ display: "inline-block" }}>
            <p style={{ margin: 0 }}>
              © {new Date().getFullYear()} — Built with Next.js · Designed with
              glass UI
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
