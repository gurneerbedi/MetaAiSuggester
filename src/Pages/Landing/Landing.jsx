import { Button, Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Landing.scss";
import { motion } from "framer-motion";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <Container maxWidth="sm" className="landing__container">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2.5rem", sm: "3.75rem" },
              fontWeight: "regular",
            }}
            className="landing__title"
          >
            Redefine Possibilities With Meta AI
          </Typography>
        </motion.div>
        <Box className="landing__buttons">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: "easeOut",
            }}
          >
            <Button
              sx={{ textTransform: "capitalize" }}
              variant="contained"
              color="primary"
              size="large"
              className="landing__button"
              disableElevation
              onClick={() => navigate("/explore")}
            >
              Explore
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: "easeOut",
            }}
          >
            <Button
              sx={{ textTransform: "capitalize" }}
              variant="outlined"
              color="secondary"
              size="large"
              className="landing__button"
              onClick={() => navigate("/results")}
            >
              Take the Quiz
            </Button>
          </motion.div>
        </Box>
      </Container>
    </div>
  );
};
export default LandingPage;
