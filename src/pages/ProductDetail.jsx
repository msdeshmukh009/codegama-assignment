import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Footer, Header } from "../common";
import { Rating } from "../features";

export const ProductDetail = () => {
  const { products } = useSelector(state => state.productsData);
  const { productId } = useParams();
  const requiredProduct = products.find(product => product.id === Number(productId));

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <section className="text-gray-600 my-auto">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 object-contain w-full max-h-96 rounded"
              src={requiredProduct?.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {requiredProduct?.title}
              </h1>

              <Rating rating={requiredProduct.rating} />

              <p className="leading-relaxed">{requiredProduct?.description}</p>

              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${requiredProduct?.price}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
