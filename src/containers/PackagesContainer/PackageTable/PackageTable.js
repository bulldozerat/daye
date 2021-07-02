import { PackageItemRow, PriceWrapper, TamponInfoWrapper } from './PackageTableStyles';

const PackageTable = ({ packagesData }) => {
  return (
    <div>
      {packagesData.map((packageData) => {
        const { productImage, price, currency, tapons, tampons } = packageData;
        const tamponsData = tapons || tampons;

        // get only unique sizes
        const sizes = new Set(
          tamponsData.reduce((acc, currentValue) => {
            if (currentValue?.size) acc.push(currentValue.size);
            return acc;
          }, [])
        );

        const coatings = new Set(
          tamponsData.reduce((acc, currentValue) => {
            if (currentValue?.coating) acc.push(currentValue.coating);
            return acc;
          }, [])
        );

        const amounts = new Set(
          tamponsData.reduce((acc, currentValue) => {
            if (currentValue?.amount) acc.push(currentValue.amount);
            return acc;
          }, [])
        );

        return (
          <PackageItemRow>
            <img src={productImage} alt='' />
            <TamponInfoWrapper>
              <div>SIZES:</div>
              <span>{sizes ? [...sizes].join(', ') : 'No avaible size'}</span>
            </TamponInfoWrapper>
            <TamponInfoWrapper>
              <div>COATING:</div>
              <span>{coatings ? [...coatings].join(', ') : 'No avaible coating'}</span>
            </TamponInfoWrapper>
            <TamponInfoWrapper>
              <div>AMOUNTS:</div>
              <span>{amounts ? [...amounts].join(', ') : 'No avaible amounts'}</span>
            </TamponInfoWrapper>
            <PriceWrapper>
              {price} {currency}
            </PriceWrapper>
          </PackageItemRow>
        );
      })}
    </div>
  );
};

export default PackageTable;
