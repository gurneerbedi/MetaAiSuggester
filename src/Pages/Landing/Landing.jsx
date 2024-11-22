import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import "./Landing.scss";
import MetaLogo from "../../Images/metalogo.webp";
import { motion } from "framer-motion";

const LandingPage = () => {
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
                            fontSize: { xs: "2.5rem", sm: "3.75rem" }, // Adjust font size for mobile and larger screens
                        }}
                        className="landing__title"
                    >
                        Redefine Possibilities With Meta-AI
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
                            variant="contained"
                            color="primary"
                            size="large"
                            className="landing__button"
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
                            variant="outlined"
                            color="secondary"
                            size="large"
                            className="landing__button"
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
