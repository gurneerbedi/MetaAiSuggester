import { motion } from "framer-motion";
import {
  Button,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Box,
  Container,
} from "@mui/material";
import "./SuccessStories.scss";
import { stories } from "/src/data/stories.js";

const SuccessStories = () => {
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <main>
      <Typography
        sx={{
          fontWeight: "medium",
          padding: "1rem",
          textAlign: "center",
          marginTop: "3rem",
        }}
        variant="h4"
        component="h1"
      >
        Transforming Lives Through Innovation
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "text.secondary",
          width: "37rem",
          margin: "0 auto 2rem auto",
        }}
      >
        iscover how Meta's innovative tools and platforms have empowered
        individuals from diverse backgrounds to achieve their goals, break
        barriers, and transform their lives. From entrepreneurs scaling
        businesses to creatives redefining their industries, these are the
        stories of growth, resilience, and success.
      </Typography>
      {stories.length > 0 && (
        <Container
          sx={{
            width: "100%",
            padding: "1rem",
          }}
        >
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "3rem",
              justifyContent: "center",
            }}
          >
            {stories.map((story, index) => (
              <motion.div key={index} variants={item}>
                <Card
                  className="card"
                  sx={{
                    maxWidth: 320,
                    height: "26.25rem",
                    borderRadius: "1.25rem",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    sx={{ height: "15rem" }}
                    image={story.image}
                    title="meta ai"
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      flexGrow: "1",
                    }}
                  >
                    <CardContent
                      sx={{ padding: "1.5rem 1.5rem 0.5rem 1.5rem" }}
                    >
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h3"
                        sx={{ fontWeight: "medium", fontSize: "1.125rem" }}
                      >
                        {story.name}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: "text.secondary",
                          fontSize: "0.8125rem",
                        }}
                      >
                        {story.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.primary",
                          fontWeight: "medium",
                          fontSize: "0.6875rem",
                          marginTop: "0.75rem",
                        }}
                      >
                        {story.story}
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ padding: "0.5rem 1rem 1rem 1rem" }}>
                      <Button
                        sx={{
                          textTransform: "capitalize",
                          fontSize: "0.75rem",
                          padding: "0.5rem 1.25rem",
                          borderRadius: "1.5rem",
                        }}
                        size="small"
                        variant="outlined"
                        disableElevation
                      >
                       {story.name}'s story
                      </Button>
                    </CardActions>
                  </Box>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      )}
    </main>
  );
};

export default SuccessStories;
