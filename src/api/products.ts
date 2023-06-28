import path from "path";
import { promises as fs } from "fs"; //Promise

export type Product = {
  id: string;
  name: string;
  price: number;
};

export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "data", "products.json"); //data파일 안에 있는 현재 경로
  const data = await fs.readFile(filePath, "utf-8");

  return JSON.parse(data);
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((item) => item.id === id);
}
