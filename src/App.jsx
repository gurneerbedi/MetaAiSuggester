import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz/Quiz.jsx";

import Landing from "./Pages/Landing/Landing.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
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
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/results" element={<Results />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
