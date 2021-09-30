import React from 'react';
import useProducts from '../../hooks/useProducts';

const OrderReview = () => {
    const [products] = useProducts();
    return (
        <div>
            <h1>Products: {products.length}</h1>
            <h2>This is OrderReview</h2>
        </div>
    );
};

export default OrderReview;