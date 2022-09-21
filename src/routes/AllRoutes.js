import { Route, Routes } from "react-router-dom";
import { ProductListing, ProductDetail } from "../pages";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductListing />} />
      <Route path="products/:productId" element={<ProductDetail />} />
    </Routes>
  );
};

export { AllRoutes };
