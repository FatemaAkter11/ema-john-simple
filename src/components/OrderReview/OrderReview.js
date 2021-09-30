import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';

const OrderReview = () => {
    const [products] = useProducts();
    const [cart] = useCart(products);
    return (
        <div>
            <h1>Products: {products.length}</h1>
            <h2>Cart: {cart.length}</h2>
            <h2>This is OrderReview</h2>
        </div>
    );
};

export default OrderReview;