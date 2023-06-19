import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog-Project",
  description: "블로그 프로젝트를 진행하고 있습니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <h1> Blog-Project</h1>
          <nav className={styles.nav}>
            <Link href="/products"> Products</Link>
            <Link href="/about"> About</Link>
            <Link href="/contact"> Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
