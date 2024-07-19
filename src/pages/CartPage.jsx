import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import './CartPage.css';

const CartPage = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart2')) || [];
   
        setCart(storedCart);
    }, []);

    const removeFromCart = (productToRemove) => {
        
        const updatedCart = cart.filter(product => product.id !== productToRemove.id);
        setCart(updatedCart);
        localStorage.setItem('cart2', JSON.stringify(updatedCart));
    };

    const updateQuantity = (productToUpdate, newQuantity) => {
        const updatedCart = cart.map(product => {
            if (product.id === productToUpdate.id) {
                return { ...product, quantity: newQuantity };
            }
            return product;
        });
        setCart(updatedCart);
        localStorage.setItem('cart2', JSON.stringify(updatedCart));
    };

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    };

    const handlePayment = () => {
        
       
        localStorage.removeItem('cart2');
      
        alert("Payment Successful!");
    };

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cart.map(product => (
                            <CartItem
                                key={product.id}
                                product={product}
                                onRemove={removeFromCart}
                                onUpdateQuantity={updateQuantity}
                            />
                        ))}
                    </div>
                    <div className="cart-summary">
                        <h2>Order Summary</h2>
                        <p>Total: ${calculateTotal().toFixed(2)}</p>
                        <a href="/payment">
                        <button className="pay-btn" onClick={handlePayment}>Pay Now</button>
                        </a>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
