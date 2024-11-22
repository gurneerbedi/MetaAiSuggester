import React, { useState, useEffect, useRef } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  Box,
  Link,
} from "@mui/material";
import "./SuccessStories.scss";
import {stories} from '/src/data/stories.js'

const SuccessStories = () => {
  const StoryCard = ({ story }) => {
    const [visible, setVisible] = useState(false);
    const cardRef = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (cardRef.current) {
        observer.observe(cardRef.current);
      }

      return () => {
        if (cardRef.current) {
          observer.unobserve(cardRef.current);
        }
      };
    }, []);

    return (
      <Card
        className="card"
        ref={cardRef}
        sx={{
          maxWidth: 345,
          mx: "auto",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
          boxShadow: 2,
          borderRadius: 2,
          backgroundColor: "white",
          "&:hover": {
            boxShadow: 4,
            transform: "scale(1.02)",
          },
        }}
      >
        <CardMedia
          component="img"
          height="300"
          image={story.image}
          alt={story.name}
          sx={{
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            objectFit: "cover",
            objectPosition: "center center",
          }}
        />
        <CardContent>
          <Typography
            variant="h5"
            component="div"
            gutterBottom
            sx={{ color: "#1c1e21", fontSize: { xs: "1rem", md: "1.25rem" } }}
          >
            {story.name}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "#606770", fontSize: { xs: "0.875rem", md: "1rem" },  className:'text', }}
          >
            {story.title}
          </Typography>
          <Typography
            variant="body2"
            className='text'
            sx={{
              color: "#606770",
              fontSize: { xs: "0.75rem", md: "0.875rem" },
            }}
          >
            {story.story}
          </Typography>
          <Box mt={2}>
            <Link
              href="#"
              underline="hover"
              className='text'
              sx={{
                color: "#1877f2",
                fontSize: { xs: "0.875rem", md: "0.875rem" },
                fontWeight: 500,
                display: "block",
              }}
            >
              Learn more about {story.name}'s story
            </Link>
          </Box>
        </CardContent>
      </Card>
    );
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 4,
        backgroundColor: "#FFFFFF",
        borderRadius: 4,
        boxShadow: 1,
        px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
      }}
    >
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
          margin: "0 auto 4rem auto",
        }}
      >
        Discover how Meta's innovative tools and platforms have empowered
        individuals from diverse backgrounds to achieve their goals, break
        barriers, and transform their lives. From entrepreneurs scaling
        businesses to creatives redefining their industries, these are the
        stories of growth, resilience, and success.
      </Typography>
      <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
        {stories.map((story) => (
          <Grid
            item
            xs={12} 
            sm={6} 
            md={4} 
            key={story.id}
          >
            <StoryCard story={story} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SuccessStories;
