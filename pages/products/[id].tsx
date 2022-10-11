import { useRouter } from "next/router";
import React from "react";
import { api } from "../../util";
import { ProductProps } from "../../types";
export interface ProjectDetailProps {
  product: ProductProps;
}
const ProjectDetail = ({ product }: ProjectDetailProps) => {
  const { query } = useRouter();

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Product :  {product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export async function getStaticProps(context: any) {
  try {
    const { params } = context;
    const productId = params.id;

    const { data } = await api.get("/products");
    const products: ProductProps[] = data;
    const product = products.find((p) => p.id === Number(productId));
    
    if (!product) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  const { data } = await api.get("/products");
  const products: ProductProps[] = data;
  let pathArr = products
    .slice(0, 3)
    .map((product) => ({ params: { id: product.id.toString() } }));
  return {
    paths: pathArr,
    fallback: true,

    // fallback = "'blocking' tells next js to complete the rendering all togather on server"
    // fallback: "blocking",
  };
}
export default ProjectDetail;
