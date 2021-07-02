import { useEffect, useState } from 'react';

import getPackages from '../../apis/get-packages';
import { normalizePackagesData } from '../../utils/helpers';

import PackageTable from './PackageTable';
import PageTitle from '../../components/PageTitle';
import PackageFilters from './PackageFilters';

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

  console.log('packagesData: ', JSON.stringify(packagesData));

  return (
    <>
      <PageTitle>Page Title</PageTitle>
      <PackageFilters />
      <PackageTable packagesData={packagesData} />
    </>
  );
};

export default PackagesContainer;
