import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product }) => {
  const addToCart = (selectedProduct) => {
    // Create a copy of the selected product to ensure immutability
    const productToAdd = { ...selectedProduct };

    // Retrieve cart from localStorage or initialize as an empty array
    let cart = JSON.parse(localStorage.getItem('cart2')) || [];
    
    // Check if the product is already in the cart

      productToAdd.quantity = 1;
      cart.push(productToAdd);
      alert(`${productToAdd.name} added to cart!`);
      localStorage.setItem('cart2', JSON.stringify(cart));
    }
    
    // Save updated cart back to localStorage

  

  return (
    
    <div className="product-item">

      
      <img 
        src={product.image} 
        alt={product.name} 
        className="product-image" 
      />
      <div className="product-details">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-desc">{product.desc}</p>
        <p className="product-rating">Rating: {product.rating} ★</p>
        <p className="product-price">Price: ${product.price}</p>
        <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
