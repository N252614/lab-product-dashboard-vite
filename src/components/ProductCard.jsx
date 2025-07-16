import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
const { id, name, price, inStock } = product;

  return (
    <div
     className={`${styles.card} ${!inStock ? styles.outOfStockClass : ""}`}
     data-testid="product-item"
     >
      <h3>{name}</h3>
      <p>${price}</p>
      {!inStock && <p>Out of stock</p>}
      <button onClickCapture={() => onRemove(id)} data-testid={`remove-button-${id}`}>
      Remove
     </button>
     </div>
  );
};

export default ProductCard;
