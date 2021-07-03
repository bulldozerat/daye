import styled from '@emotion/styled';

export const PackageItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  background: #fff;
  border: 0.2rem solid black;
  margin-bottom: 1rem;
  cursor: pointer;
  img {
    width: 10rem;
  }
  &:hover {
    background: #fafafa;
  }
`;

export const PriceWrapper = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
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
