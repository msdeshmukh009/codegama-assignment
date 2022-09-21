const filterProducts = (appliedFilters, data) => {
  let tempData = [...data];

  if (appliedFilters.length) {
    tempData = tempData.filter(product => appliedFilters.includes(product.category));
  }

  return tempData;
};

export { filterProducts };
