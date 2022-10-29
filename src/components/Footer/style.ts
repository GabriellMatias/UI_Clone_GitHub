import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5rem 3.2rem;
`;

export const Line = styled.div`
  max-width: 1280px;
  width: 100%;
  border-top: 1px solid var(--border);
`;

export const GithubLogo = styled(FaGithub)`
  margin-top: 2.5rem;
  fill: var(--border);
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;
