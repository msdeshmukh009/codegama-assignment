import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const { products } = useSelector(state => state.productsData);
  const { productId } = useParams();
  const requiredProduct = products.find(product => product.id === Number(productId));

  return (
    <div>
      <h1>{requiredProduct.title}</h1>
    </div>
  );
};
