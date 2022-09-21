import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from "../../../utils";
import { Rating } from "./Rating";

const ProductCard = ({ product }) => {
  const { image, id, title, category, price, rating } = product;

  return (
    <div class="lg:w-1/4 md:w-1/2 p-4 w-full max-w-[15rem] min-w-[15rem] flex flex-col justify-between border-2 border-gray-200 rounded-md">
      <Link to={`products/${id}`} class="flex flex-1 items-center rounded max-h-60">
        <img alt="ecommerce" class="w-full h-full object-contain" src={image} />
      </Link>

      <div class="mt-4">
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">
          {capitalizeFirstLetter(category)}
        </h3>
        <h2 class="text-gray-900 title-font text-lg font-medium">{title}</h2>
        <p class="mt-1">${price}</p>
        <Rating rating={rating} hideCount />
      </div>
    </div>
  );
};
export { ProductCard };
