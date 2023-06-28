import Link from "next/link";
import styles from "./page.module.css";
import { getProducts } from "@/api/products"; //Promise기 때문에 async await를 사용해줘야 함

//서버 데이터에 있는 제품의 리스트를 읽어와서 보여주기
export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <>
      <h1>Products</h1>
      <nav className={styles.nav}>
        {products.map((item, index) => (
          <li key={index}>
            <Link href={`products/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </nav>
    </>
  );
}
