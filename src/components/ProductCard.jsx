import PropTypes from "prop-types";
import {
  Button,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Box,
} from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{
        maxWidth: 320,
        height: "26.25rem",
        borderRadius: "1.25rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        sx={{ height: "9.375rem" }}
        image={product.image}
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
        <CardContent sx={{ padding: "1.5rem 1.5rem 0.5rem 1.5rem" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="h3"
            sx={{ fontWeight: "medium", fontSize: "1.125rem" }}
          >
            {product.headline}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "0.8125rem",
            }}
          >
            {product.description}
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
            {product.text}
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
            variant="contained"
            disableElevation
          >
            Learn More
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
