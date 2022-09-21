import { useDispatch, useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../../utils";
import { updateFilters, updateMinRating, clearFilter } from "../productsSlice";

export const Filters = ({ availableCategories }) => {
  const { appliedFilters, minRating } = useSelector(state => state.productsData);
  const dispatch = useDispatch();

  const handleCheckBox = e => {
    const { name } = e.target;
    dispatch(updateFilters(name));
  };

  const handleRadios = e => {
    const { value } = e.target;
    dispatch(updateMinRating(Number(value)));
  };

  const handleClearFilter = () => {
    dispatch(clearFilter());
  };

  return (
    <div className="sm:block min-w-[200px] hidden p-2">
      <div className="flex justify-between mb-2">
        <h1 className="text-lg font-bold text-center">Filters</h1>
        <button onClick={handleClearFilter} className="text-xs">
          Clear Filter
        </button>
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <h2 className="text-md font-semibold underline">Categories</h2>
        {availableCategories.map(category => (
          <label key={category} className="flex items-center gap-2 cursor-pointer">
            <input
              className="w-4 h-4"
              type="checkbox"
              name={category}
              onChange={handleCheckBox}
              checked={appliedFilters.includes(category)}
            />
            <span>{capitalizeFirstLetter(category)}</span>
          </label>
        ))}
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <h2 className="text-md font-semibold underline">Rating</h2>
        {[4, 3, 2, 1].map(num => (
          <label key={num} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              className="w-4 h-4"
              value={num}
              onChange={handleRadios}
              checked={minRating === num}
            />
            {num} Star and above
          </label>
        ))}
      </div>
    </div>
  );
};
