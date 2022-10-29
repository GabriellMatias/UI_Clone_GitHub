import { lightFormat } from "date-fns";
import { useState, FormEvent } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ThemeName } from "../../styles/themes";
import { GithubLogo, HeaderContainer, SearchForm } from "./style";

interface HeaderProps {
  themeName: ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

export function Header({ themeName, setThemeName }: HeaderProps) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    navigate("/" + search.toLocaleLowerCase().trim());
  }
  function toggleTheme() {
    setThemeName(themeName === "light" ? "dark" : "light");
  }

  return (
    <HeaderContainer>
      <GithubLogo onClick={toggleTheme} />
      <SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username or repor..."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
    </HeaderContainer>
  );
}
