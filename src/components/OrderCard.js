import React, { useState, useEffect } from 'react';
import OrderCardHeader from './OrderCardHeader';
import OrderCardBody from './OrderCardBody';

const OrderCard = ({ order, handleCompleteOrder }) => {
  const { startTime } = order;
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const elapsed = Math.floor((now - new Date(startTime)) / 1000);
      setTimeElapsed(elapsed);
    }, 1000);

    return () => clearInterval(timer);
  }, [startTime]);

  let timerColor = '';
  if (timeElapsed < 60) {
    timerColor = 'green';
  } else if (timeElapsed < 180) {
    timerColor = 'warning';
  } else {
    timerColor = 'danger';
  }

  const hours = Math.floor(timeElapsed / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((timeElapsed % 3600) / 60).toString().padStart(2, '0');
  const seconds = (timeElapsed % 60).toString().padStart(2, '0');

  const elapsedTimeString = `${hours}:${minutes}:${seconds}`;

  const handleCardClick = () => {
    setIsVisible(false);
    handleCompleteOrder(order.orderNumber);
  };
  
  return (
    <div className={`order-card ${isVisible ? '' : 'hidden'}`} onClick={handleCardClick}>
      <OrderCardHeader
        order={order}
        elapsedTimeString={elapsedTimeString}
        timerColor={timerColor}
      />
      <OrderCardBody order={order} />
    </div>
  );
};

export default OrderCard;
