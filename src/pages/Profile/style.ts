import styled from 'styled-components';

export const ProfileContainer = styled.div`
  padding: 1.6rem 2.4rem;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1280px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.aside`
  padding: 0 2.4rem;
  @media (min-width: 768px) {
    width: 25%;
  }
`;
export const RightSide = styled.article`
  padding: 0 2.4rem;
  @media (min-width: 768px) {
    width: 75%;
  }
`;

export const RepositoryListContainer = styled.div`
  margin-top: 1.6rem;
  h2 {
    font-size: 1.6rem;
    font-weight: normal;
  }
  > div {
    margin-top: 0.8rem;
    display: grid;
    grid-gap: 1.6rem;

    grid-template-columns: 1fr;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: minmax(min-content, max-content);
    }
  }
`;

export const CalendarHeading = styled.span`
  font-size: 1.6rem;
  display: inline-flex;
  margin: 3.9rem 0 0.9rem;
`;