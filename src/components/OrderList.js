import React, { useState } from 'react';
import OrderCard from './OrderCard';

const OrderList = ({ orders, handleCompleteOrder }) => {
  const [visibility, setVisibility] = useState(
    orders.reduce((acc, order) => {
      acc[order.orderNumber] = true;
      return acc;
    }, {})
  );

  const toggleVisibility = (orderNumber) => {
    setVisibility((prevState) => ({
      ...prevState,
      [orderNumber]: !prevState[orderNumber],
    }));
  };

  return (
    <div className="order-list">
      {orders.map((order) => (
        visibility[order.orderNumber] && (
            <OrderCard 
              key={order.orderNumber} 
              order={order} 
              handleCompleteOrder={handleCompleteOrder} 
            />
        )
      ))}
    </div>
  );
};

export default OrderList;
