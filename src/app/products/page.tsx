import Link from "next/link";
import styles from "./page.module.css";

export default function Products() {
  const products = ["shirt", "pants", "skirt", "shoes"];

  return (
    <>
      <h1>Products</h1>
      <nav className={styles.nav}>
        {products.map((item, index) => (
          <li key={index}>
            <Link href={`products/${item}`}>{item}</Link>
          </li>
        ))}
      </nav>
    </>
  );
}
