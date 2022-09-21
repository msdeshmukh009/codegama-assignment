const filterProducts = (appliedFilters, minRating, data) => {
  let tempData = [...data];

  if (appliedFilters.length) {
    tempData = tempData.filter(product => appliedFilters.includes(product.category));
  }

  if (minRating) {
    tempData = tempData.filter(product => product.rating.rate >= minRating);
  }

  return tempData;
};

export { filterProducts };
