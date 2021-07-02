import styled from '@emotion/styled';

export const PackageItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: #fff;
  border: 2px solid black;
  margin-bottom: 1rem;
  img {
    width: 10rem;
  }
`;

export const PriceWrapper = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
`;

export const TamponInfoWrapper = styled.div`
  font-size: 1.4rem;
  div {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  span {
    font-size: 1.4rem;
  }
`;
