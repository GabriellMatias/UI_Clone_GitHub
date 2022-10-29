import { useState } from "react";
import "react-calendar-heatmap/dist/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Profile } from "./pages/Profile";
import { Repository } from "./pages/Reporsitory";
import Global from "./styles/global";
import { ThemeName, themes } from "./styles/themes";

export function App() {
  const [themeName, setThemeName] = useState<ThemeName>("light");
  const currentTheme = themes[themeName];

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <Global />

        <Header themeName={themeName} setThemeName={setThemeName} />

        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/:username" element={<Profile />} />

          <Route path="/:username/:reponame" element={<Repository />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}
