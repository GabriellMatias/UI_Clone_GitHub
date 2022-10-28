import styled, { css } from "styled-components";
import { RiBookMarkLine, RiStarLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

export const RepositoryContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;

  > p {
    font-size: 1.6rem;
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;
export const Stats = styled.ul`
  margin-top: 16px;
  display: flex;
  align-items: center;
  > li {
    display: flex;
    align-items: center;
    margin-right: 9px;
    > * {
      margin-right: 7px;
      color: var(--gray);
    }
  }
`;

export const Breadcrump = styled.div`
  margin-bottom: 1.6rem;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;
  font-size: 1.8rem;

  > a {
    color: var(--link);
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
    &.username {
      margin-left: 8px;
    }
    &.reponame {
      font-weight: 600;
    }
  }

  > span {
    padding: 0 5px;
  }
`;

export const LinkButton = styled.a`
  text-decoration: none;
  margin-top: 24px;
  background: var(--gray-dark);
  padding: 12px 17px;
  border-radius: 24px;
  width: max-content;
  display: flex;
  align-items: center;
  > span {
    color: var(--primary);
  }
  > svg {
    fill: var(--primary);
    margin-right: 10px;
  }
`;

export const GithubIcon = styled(FaGithub)`
  ${iconCSS}
`;
export const ReporIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`;
export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;
export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;
