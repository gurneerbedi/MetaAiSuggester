import PropTypes from "prop-types";
import {
  Button,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Card,
} from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 320, borderRadius: "20px" }}>
      <CardMedia sx={{ height: 100 }} image={product.image} title="meta ai" />
      <CardContent sx={{ padding: "1.5rem 1.5rem 0.5rem 1.5rem" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h3"
          sx={{ fontWeight: "medium", fontSize: { xs: "18px" } }}
        >
          {product.headline}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "text.secondary", fontSize: { xs: "13px", m: "1rem" } }}
        >
          {product.description}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.primary",
            fontWeight: "medium",
            fontSize: { xs: "11px", m: "14px" },
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
            fontSize: { xs: "12px", m: "14px" },
            padding: "8px 20px",
            borderRadius: "24px",
          }}
          size="small"
          variant="contained"
          disableElevation
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
