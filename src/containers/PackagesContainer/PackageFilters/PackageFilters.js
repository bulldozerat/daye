import { useState } from 'react';

import { uid } from 'react-uid';

const PackageFilters = ({ packagesData, allUniqueSizes, allUniqueCoatings, setRenderPackagesData }) => {
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedCoating, setSelectedCoating] = useState('all');

  const handleFilterSelectChange = (e, type) => {
    const isSize = type === 'size';
    const changedFilterFalue = e.target.value;
    const otherFilterValue = isSize ? selectedCoating : selectedSize;

    // changed filter is all
    if (changedFilterFalue === 'all') {
      // both filters are all render all data
      if (otherFilterValue === 'all') {
        setRenderPackagesData(packagesData);
      }

      // second filter is not all
      if (otherFilterValue !== 'all') {
        // filter whole data for cases with otherFilterValue only
        const filteredPackagesData = packagesData.filter((packageData) => {
          const tamponsData = packageData.tapons || packageData.tampons;
          const isTamponFound = tamponsData.find((tampon) =>
            isSize ? tampon.coating === otherFilterValue : tampon.size === otherFilterValue
          );

          return isTamponFound;
        });

        setRenderPackagesData(filteredPackagesData);
      }
    }

    // changed filter is not all
    if (changedFilterFalue !== 'all') {
      // second filter is all
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
      }

      // both are not all
      if (otherFilterValue !== 'all') {
        // check needs to pass both filter conditions
        const filteredPackagesData = packagesData.filter((packageData) => {
          const tamponsData = packageData.tapons || packageData.tampons;

          const isTamponFound = tamponsData.find((tampon) => {
            if (isSize) {
              return tampon.size === changedFilterFalue && tampon.coating === otherFilterValue;
            }

            return tampon.size === otherFilterValue && tampon.coating === changedFilterFalue;
          });

          return isTamponFound;
        });

        setRenderPackagesData(filteredPackagesData);
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
            <option value={size} key={uid(size)}>
              {size}
            </option>
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
            <option value={coating} key={uid(coating)}>
              {coating}
            </option>
          ))}
          <option value='all'>Show All</option>
        </select>
      </div>
    </div>
  );
};

export default PackageFilters;
