import styled from "styled-components";

export const ArtGridContainer = styled.div`
  column-count: 3; /* Adjust the number of columns as needed */
  column-gap: 1rem; /* Adjust the gap between columns as needed */
  margin: 0 2rem;

  @media (max-width: 60rem) {
    column-count: 2;
    margin: 0 1rem; /* Reduce the margin on medium screens */
  }

  @media (max-width: 40rem) {
    column-count: 2;
    margin: 0 0.5rem; /* Reduce the margin further on smaller screens */
  }

  @media (max-width: 35rem) {
    column-count: 1;
    margin: 0 0.5rem; /* Reduce the margin further on the smallest screens */
  }

  & > * {
    break-inside: avoid;
    margin-bottom: 1rem; /* Adjust the bottom margin as needed */
  }
`;
