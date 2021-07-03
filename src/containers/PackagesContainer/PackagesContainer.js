import { useEffect, useState } from 'react';

import getPackages from '../../apis/get-packages';
import { normalizePackagesData, getAllUnique } from '../../utils/helpers';

import PackageTable from './PackageTable';
import PageTitle from '../../components/PageTitle';
import PackageFilters from './PackageFilters';

const PackagesContainer = () => {
  const [packagesData, setPackagesData] = useState(null);
  const [renderPackagesData, setRenderPackagesData] = useState(null);

  const fetchPackagesData = async () => {
    const data = await getPackages();
    const normalizedPackagesData = normalizePackagesData(data);

    setRenderPackagesData(normalizedPackagesData);
    setPackagesData(normalizedPackagesData);
  };

  useEffect(() => {
    fetchPackagesData();
  }, []);

  if (!packagesData) return 'loading...';

  console.log('packagesData: ', packagesData);

  const allUniqueSizes = getAllUnique(packagesData, 'sizes');
  const allUniqueCoatings = getAllUnique(packagesData);

  return (
    <>
      <PageTitle>Page Title</PageTitle>
      <PackageFilters
        packagesData={packagesData}
        allUniqueSizes={allUniqueSizes}
        allUniqueCoatings={allUniqueCoatings}
        setRenderPackagesData={setRenderPackagesData}
      />
      <PackageTable renderPackagesData={renderPackagesData} />
    </>
  );
};

export default PackagesContainer;
