import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root{
    ${(props) => {
      const theme = props.theme;
      let append = "";

      Object.entries(theme).forEach(([prop, value]) => {
        append += `--${prop}:${value};`;
      });
      return append;
    }}
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  html{
    min-height: 100%;
    font-size: 62.5%;
    background:var(--primary);
  }

  *, input, button{
    background: none;
    border: 0;
    color: var(--black);
    font-family:  -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    transition:color .2s ease-out;
  
  }
  ul{
    list-style: none;
  }


`;