import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

//className'lerin geldiği css kodu yok bilerek koymadım. -Ş

function App() {
  const routing = useRoutes(routes);

  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">{routing}</main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
