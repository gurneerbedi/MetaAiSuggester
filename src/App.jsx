import * as React from "react";
import cardImage from "../assets/images/placeholder-card-img.jpg";
import {
  CardActionArea,
  Button,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  createTheme,
  ThemeProvider,
} from "@mui/material";

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
      <Card sx={{ maxWidth: 320, borderRadius: "20px" }}>
        <CardMedia sx={{ height: 225 }} image={cardImage} title="meta ai" />
        <CardContent sx={{ padding: "1.5rem 1.5rem 0.5rem 1.5rem" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h3"
            sx={{ fontWeight: "medium" }}
          >
            Product Name
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Product description: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Modi debitis cum quo voluptates quis ex autem
            repellendus ea numquam maxime suscipit.
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: "0.5rem 1rem 1rem 1rem" }}>
          <Button
            sx={{
              textTransform: "capitalize",
              fontSize: "14px",
              padding: "8px 20px",
              borderRadius: "24px",
            }}
            fullWidth
            size="small"
            variant="contained"
            disableElevation
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </ThemeProvider>
  );
}

export default App;
