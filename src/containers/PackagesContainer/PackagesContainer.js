import { useEffect, useState } from 'react';

import getPackages from '../../apis/get-packages';

const PackagesContainer = () => {
  const [packagesData, setPackagesData] = useState(null);

  useEffect(() => {
    fetchPackagesData();
  }, []);

  const fetchPackagesData = async () => {
    const fetchedPackegesData = await getPackages();
    setPackagesData(fetchedPackegesData);
  };

  if (!packagesData) return 'loading...';

  return <div>package container</div>;
};

export default PackagesContainer;
