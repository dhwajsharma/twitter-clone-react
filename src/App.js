import React, { useState, useEffect } from "react";
import './App.css';
import Feed from './components/Feed/Feed';
import Sidebar from './components/Sidebar/Sidebar';
import Widgets from './components/Widgets/Widgets';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./components/useDarkMode";
import { Toggler } from "./components/Toggler";

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  if (!mountedComponent) return <div />
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <Toggler theme={theme} themeToggler={themeToggler} />
          <Sidebar />
          <Feed />
          <Widgets />

        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
