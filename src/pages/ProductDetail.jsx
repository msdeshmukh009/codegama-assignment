import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Footer, Header } from "../common";
import { Rating } from "../features";
import { getProduct } from "../features/products/helpers";
import { findSingleProduct } from "../features/products/productsSlice";

export const ProductDetail = () => {
  const {
    productsData: { products, singleProduct },
  } = useSelector(state => state);
  const dispatch = useDispatch();
  const { productId } = useParams();

  useEffect(() => {
    if (!products.length) {
      dispatch(getProduct({ productId }));
    } else {
      dispatch(findSingleProduct(Number(productId)));
    }
  }, [products, productId, dispatch]);

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <section className="text-gray-600 my-auto">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt={singleProduct?.title}
              className="lg:w-1/2 object-contain w-full max-h-96 rounded"
              src={singleProduct?.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {singleProduct?.title}
              </h1>

              <Rating rating={singleProduct?.rating} />

              <p className="leading-relaxed">{singleProduct?.description}</p>

              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${singleProduct?.price}
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
