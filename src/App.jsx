import Landing from "./Pages/Landing/Landing.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from "./Pages/Results/Results.jsx";
import Explore from "./Pages/Explore/Explore.jsx";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "serif"].join(","),
  },
  palette: {
    primary: {
      main: "#0064e0",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/results" element={<Results />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
