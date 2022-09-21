import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/helpers/getAllProducts";
import { updateFilters } from "../features/products/productsSlice";
import { filterProducts } from "../utils";
import { Link } from "react-router-dom";

export const ProductListing = () => {
  const dispatch = useDispatch();
  const {
    productsData: { products, appliedFilters },
  } = useSelector(state => state);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const availableCategories = [...new Set(products.map(product => product.category))];

  const handleCheckBox = e => {
    const { name } = e.target;

    dispatch(updateFilters(name));
  };

  const filteredList = filterProducts(appliedFilters, products);

  return (
    <div className="App">
      <div>
        <h1>Filters</h1>
        {availableCategories.map(category => (
          <label key={category}>
            {category}
            <input type="checkbox" name={category} onChange={handleCheckBox} />
          </label>
        ))}
      </div>
      <div>
        {filteredList.map(({ id, title, category }) => (
          <h1 key={id}>
            <Link to={`products/${id}`}>{title}</Link>
            {category}
          </h1>
        ))}
      </div>
    </div>
  );
};
