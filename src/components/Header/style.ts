import styled from "styled-components"
import {FaGithub} from 'react-icons/fa'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 1.1rem 1.6rem;
`

export const SearchForm = styled.form`
  padding-left: 1.6rem;
  width: 100%;
  input{
    background: var(--search);
    outline: 0;
    border-radius: 6px;
    padding: 0.7rem 1.2rem;
    width: 100%;
    transition: width .2s ease-out, color .2s ease-out;

    &:focus{
      width: 31.8rem;

    }
  }

`

export const GithubLogo = styled(FaGithub)`
  cursor: pointer;

  fill: var(--logo);
  width: 3.2rem;
  height: 3.2rem;
  flex-shrink: 0;

  &:hover {
    opacity: 0.8;
  }
`;