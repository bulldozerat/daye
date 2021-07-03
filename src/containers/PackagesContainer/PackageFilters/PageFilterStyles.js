import styled from '@emotion/styled';

export const PackageFilterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FilterSelectWrapper = styled.div`
  margin-left: 1rem;
  margin-bottom: 1rem;
  select {
    padding: 0 0.5rem;
    height: 4rem;
    font-size: 1.4rem;
    font-weight: bold;
    text-transform: capitalize;
    border: 0.1rem solid black;
    cursor: pointer;
    &:hover {
      background: #fafafa;
    }
  }
`;
