import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import * as backend from "../../api/backend.js";

function Results() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const loadProductList = async () => {
      setProductList(await backend.getProducts());
    };
    loadProductList();
  }, []);

  return (
    <>
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
        stories to see how these Meta AI features have succesfully helped
        others.
      </Typography>
      <Container
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "3rem",
          padding: "1rem",
          justifyContent: "center",
        }}
      >
        {productList.map((product, index) => (
          <motion.div
            key={product.key}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ProductCard key={product.key} product={product} />
          </motion.div>
        ))}
      </Container>
    </>
  );
}

export default Results;
