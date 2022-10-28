import styled, { css } from "styled-components";
import { RiBookMarkLine } from "react-icons/ri";

export const ProfileContainer = styled.div`
  padding: 1.6rem 2.4rem;
  overflow: hidden;
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

export const Tab = styled.div`

flex-direction: column;
  background: var(--primary);
  .content {
    display: flex;
    align-items: center;
    width: min-content;
    padding: 1.4rem 1.6rem;
    border-bottom: 2px solid var(--orange);

    .label {
      font-size: 1.4rem;
      padding: 0.7px;
      font-weight: 600;
    }

    .number {
      font-size: 1.2rem;
      background: var(--ticker);
      padding: 0.2rem 0.6rem;
      border-radius: 24px;
    }
  }
  .line {
    display: flex;
    width: 200vw;
    border: 1px solid var(--border);
    margin-left: -50vw;
  }
  /* CHILD OF TAB, PLEASE USE &*/
  &.mobile {
    margin-top: 2.4rem;
    .content { 
      margin: 0 auto;
    }
    @media (min-width: 768px) {
      display: none;
    }
  }
  &.desktop{
    display: none;
    @media(min-width:768px){
      /* resetadad como se nao tivesse mexido em nada*/
      display: unset; 
    }
    .wrapper{
      display: flex;
      margin: 0 auto;
      max-width: 1280px;
    }
    .offset{
      width: 25%;
      margin: 1.6rem;
    }
  }
`;

export const RepoIcon = styled(RiBookMarkLine)`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.4rem;
`;
