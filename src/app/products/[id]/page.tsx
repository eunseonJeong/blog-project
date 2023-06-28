import { getProduct, getProducts } from "@/api/products";
import NotFound from "@/app/not-found";

type Props = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.id}`,
  };
}

//서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
export default async function ProductPage({ params: { id } }: Props) {
  const product = await getProduct(id);

  if (!product) {
    NotFound();
  }

  return <h1>{product.name}의 제품 설명 페이지</h1>;
}

//모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}
