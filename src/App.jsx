import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz/Quiz.jsx";

import Landing from "./Pages/Landing/Landing.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import Results from "./Pages/Results/Results.jsx";
import Explore from "./Pages/Explore/Explore.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const [recommendations, setRecommendations] = useState([]);
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/results"
          element={<Results productList={recommendations} />}
        />
        <Route
          path="/quiz"
          element={
            <Quiz
              submitHandler={(recommendations) => {
                setRecommendations(recommendations);
                navigate("/results");
              }}
            />
          }
        />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
