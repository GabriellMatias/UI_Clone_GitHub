import { GithubLogo, HeaderContainer, SearchForm } from './style';

export function Header(){
  return(
    <HeaderContainer>
      <GithubLogo/>
      <SearchForm>
        <input type="text" placeholder='Enter username or repor...'/>
      </SearchForm>

    </HeaderContainer>
  )
}