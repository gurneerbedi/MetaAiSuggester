import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import { Typography, Container } from "@mui/material";
import { motion } from "framer-motion";

function Results({ productList }) {
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
        How Meta AI Can Help You
      </Typography>
      <Typography
        sx={{
          textAlign: "center",
          color: "text.secondary",
          width: "37rem",
          margin: "0 auto 2rem auto",
        }}
      >
        We&apos;ve curated a list of Meta AI features that will help you and
        your business thrive. Browse, learn more, or head over to our user
        stories to see how these Meta AI features have successfully helped
        others.
      </Typography>
      {productList.length > 0 && (
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
            {productList.map((product, index) => (
              <motion.div key={index} variants={item}>
                <ProductCard key={product.id} product={product} />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      )}
    </main>
  );
}

export default Results;
