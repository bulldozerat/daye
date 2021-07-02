const PackageFilters = ({
  packagesData,
  allUniqueSizes,
  allUniqueCoatings,
  setRenderPackagesData,
  renderPackagesData,
}) => {
  const handleFilterSelectChange = (e, type) => {
    const selectValue = e.target.value;
    const isSize = type === 'size';
    const isFilterAlreadyApplied = packagesData.length !== renderPackagesData.length;
    const dataToBeFiltered = isFilterAlreadyApplied ? renderPackagesData : packagesData;

    if (selectValue === 'all') {
      setRenderPackagesData(packagesData);
      return;
    }

    const filteredPackagesData = dataToBeFiltered.filter((packageData) => {
      const tamponsData = packageData.tapons || packageData.tampons;
      const isTamponFound = tamponsData.find((tampon) =>
        isSize ? tampon.size === selectValue : tampon.coating === selectValue
      );

      console.log('isTamponFound: ', isTamponFound);

      return isTamponFound;
    });

    console.log('filteredPackagesData: ', filteredPackagesData);
    setRenderPackagesData(filteredPackagesData);
  };

  return (
    <div>
      <div>
        Sizes Filter:
        <select onChange={(e) => handleFilterSelectChange(e, 'size')}>
          <option value='all'>Select</option>
          {[...allUniqueSizes].map((size) => (
            <option value={size}>{size}</option>
          ))}
        </select>
      </div>
      <div>
        Coatings Filter:
        <select onChange={handleFilterSelectChange}>
          <option value='all'>Select</option>
          {[...allUniqueCoatings].map((coating) => (
            <option value={coating}>{coating}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PackageFilters;
