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

export default function PantsPage({ params }: Props) {
  if (params.id === "nothing") {
    NotFound();
  }
}

export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    id: product,
  }));
}
