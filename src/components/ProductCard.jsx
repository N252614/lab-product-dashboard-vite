import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
const { id, name, price, inStock } = product;

const cardClass = inStock
? styles.card
: `${styles.card} ${styles.outOfStockClass}`;

  return (
    <div className={cardClass}>
      <h3>{name}</h3>
      <p>${price}</p>
      {!inStock && <p>Out of stock</p>}
      <button 
      data-testid={`remove-button-${product.id}`} 
      onClick={() => onRemove(product.id)}
      >
      Remove
     </button>
     </div>
  );
};

export default ProductCard;
