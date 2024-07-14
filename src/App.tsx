import { ThemeProvider } from "styled-components";
import dark from "./styles/themes/dark";

import GlobalStyles from "./styles/GlobalStyles";
import { Routes } from "./routes";

function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;