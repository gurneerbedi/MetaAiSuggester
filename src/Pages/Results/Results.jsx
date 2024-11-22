import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { Typography, Container } from "@mui/material";
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
        sx={{ fontWeight: "medium", padding: "1rem" }}
        variant="h4"
        component="h1"
      >
        Recommended Meta AI
      </Typography>
      <Container
        sx={{ display: "flex", flexWrap: "wrap", gap: "1rem", padding: "1rem" }}
      >
        {productList.map((product) => (
          <ProductCard key={product.key} product={product} />
        ))}
      </Container>
    </>
  );
}

export default Results;
