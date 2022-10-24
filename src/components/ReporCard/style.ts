import styled, { css } from "styled-components";
import { RiBookMarkLine, RiStarLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";

export const ReporCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.6rem;
  border: 1px solid var(--border);
  border-radius: 6px;
`;
export const HeaderRepoCard = styled.div`
  header {
    display: flex;
    align-items: center;
    a {
      margin-left: 0.8rem;
      font-size: 1.4rem;
      font-weight: 600;
      color: var(--link);
      text-decoration: none;

      &:focus,
      &:hover {
        text-decoration: underline;
      }
    }
  }
  p {
    margin: 0.8rem 0 1.6rem;
    font-size: 1.2rem;
    color: var(--gray);
    letter-spacing: 0.1rem;
  }
`;

export const FooterRepoCard = styled.div`
  ul {
    display: flex;
    align-items: center;

    li {
      display: flex;
      align-items: center;
      margin-right: 1.6rem;

      span {
        margin-left: 0.5rem;
        font-size: 1.2rem;
        color: var(--gray);
      }
    }
  }
  .language {
    margin-top: 0;
    width: 12px;
    height: 12px;
    flex-shrink: 0;
    border-radius: 50%;

    &.another {
      background: var(--other-language);
    }
    &.javascript {
      background: var(--javascript);
    }
    &.typescript {
      background: var(--typescript);
    }
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;
export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;
export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`;
