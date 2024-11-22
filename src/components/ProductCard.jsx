import "./ProductCard.scss";

const ProductCard = ({productList}) => {
  return (
    <div className="product-card">
      <ul className="product-card__list">
        {productList.map((product) => {
          return (
            <li key={product.id} className="product-card__list-item">
              <img src={product.image} alt='Meta AI product image'/>
              <h1 className="product-card__heading">{product.headline}</h1>
              <p className="product-card__description">{product.description}</p>
              <p className="product-card__stats">{product.text}</p>
              <button className="product-card__button"><a href="#">Learn More</a></button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductCard;
