import { useState } from 'react';

const PackageFilters = ({
  packagesData,
  allUniqueSizes,
  allUniqueCoatings,
  setRenderPackagesData,
  renderPackagesData,
}) => {
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedCoating, setSelectedCoating] = useState('all');

  const handleFilterSelectChange = (e, type) => {
    const isSize = type === 'size';
    const changedFilterFalue = e.target.value;
    const otherFilterValue = isSize ? selectedCoating : selectedSize;

    // current filter is all
    if (changedFilterFalue === 'all') {
      // both filters are all render all data
      if (otherFilterValue === 'all') {
        console.log('Render all data both are all');
        setRenderPackagesData(packagesData);
        return;
      }

      // if second filter is not all
      if (otherFilterValue !== 'all') {
        // filter whole data for cases with otherFilterValue only
        const filteredPackagesData = packagesData.filter((packageData) => {
          const tamponsData = packageData.tapons || packageData.tampons;
          const isTamponFound = tamponsData.find((tampon) =>
            isSize ? tampon.size === otherFilterValue : tampon.coating === otherFilterValue
          );

          return isTamponFound;
        });
        setRenderPackagesData(filteredPackagesData);
        return;
      }
    }

    // current filter is not all
    if (changedFilterFalue !== 'all') {
      // is second filter is all
      if (otherFilterValue === 'all') {
        // filter whole data for cases with changedFilterFalue only
        const filteredPackagesData = packagesData.filter((packageData) => {
          const tamponsData = packageData.tapons || packageData.tampons;
          const isTamponFound = tamponsData.find((tampon) =>
            isSize ? tampon.size === changedFilterFalue : tampon.coating === changedFilterFalue
          );

          return isTamponFound;
        });
        setRenderPackagesData(filteredPackagesData);
        return;
      }

      // both has selected filters
      if (otherFilterValue !== 'all') {
        // renderPackagesData already has been filtered by the second filter
        const filteredPackagesData = renderPackagesData.filter((packageData) => {
          const tamponsData = packageData.tapons || packageData.tampons;
          const isTamponFound = tamponsData.find((tampon) =>
            isSize ? tampon.size === changedFilterFalue : tampon.coating === changedFilterFalue
          );

          return isTamponFound;
        });

        setRenderPackagesData(filteredPackagesData);
        return;
      }
    }

    isSize ? setSelectedSize(changedFilterFalue) : setSelectedCoating(changedFilterFalue);
  };

  return (
    <div>
      <div>
        <select onChange={(e) => handleFilterSelectChange(e, 'size')}>
          <option value='all' disabled selected>
            Select Filter
          </option>
          {[...allUniqueSizes].map((size) => (
            <option value={size}>{size}</option>
          ))}
          <option value='all'>Show All</option>
        </select>
      </div>
      <div>
        <select onChange={handleFilterSelectChange}>
          <option value='all' disabled selected>
            Select Coating
          </option>
          {[...allUniqueCoatings].map((coating) => (
            <option value={coating}>{coating}</option>
          ))}
          <option value='all'>Show All</option>
        </select>
      </div>
    </div>
  );
};

export default PackageFilters;
