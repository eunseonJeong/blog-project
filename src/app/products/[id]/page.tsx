type Props = {
  params: {
    id: string;
  };
};

export default function PantsPage({ params }: Props) {
  return <div>{params.id} 제품 설명 페이지</div>;
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    id: product,
  }));
}
