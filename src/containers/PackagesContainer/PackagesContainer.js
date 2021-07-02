import { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import getPackages from '../../apis/get-packages';
import { normalizePackagesData } from '../../utils/helpers';

const PackageItem = styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid black;
  margin-bottom: 1rem;
  img {
    width: 6rem;
  }
`;

const PackagesContainer = () => {
  const [packagesData, setPackagesData] = useState(null);

  const fetchPackagesData = async () => {
    const data = await getPackages();
    const normalizedPackagesData = normalizePackagesData(data);

    setPackagesData(normalizedPackagesData);
  };

  useEffect(() => {
    fetchPackagesData();
  }, []);

  if (!packagesData) return 'loading...';

  console.log('packagesData: ', packagesData);

  return (
    <div>
      {packagesData.map((packageData) => {
        const { productImage, price, currency, tapons, tampons } = packageData;
        const tamponsData = tapons || tampons;

        return (
          <PackageItem>
            <img src={productImage} alt='' />
            <div>Tapoons or tampons</div>
            <div>
              {price} {currency}
            </div>
          </PackageItem>
        );
      })}
    </div>
  );
};

export default PackagesContainer;
