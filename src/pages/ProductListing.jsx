import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/helpers/getAllProducts";
import { filterProducts } from "../utils";
import { Footer, Header } from "../common";
import { Filters, ProductCard } from "../features";

export const ProductListing = () => {
  const dispatch = useDispatch();
  const {
    productsData: { products, appliedFilters, minRating, isLoading, error },
  } = useSelector(state => state);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const availableCategories = [...new Set(products.map(product => product.category))];

  const filteredList = filterProducts(appliedFilters, minRating, products);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />

      <div className="flex gap-6 p-4 min-h-screen items-start">
        <Filters availableCategories={availableCategories} />

        <div className="flex gap-2 flex-wrap justify-center sm:justify-start w-full">
          <p className="text-red-500 text-center w-full">{error ? error : null}</p>
          <p className="text-center w-full">{isLoading ? "Loading...." : null}</p>

          {filteredList.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
