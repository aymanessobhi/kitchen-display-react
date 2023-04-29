import React from 'react';

const OrderCardHeader = ({ order, timerColor, elapsedTimeString, handleCardClick }) => {
  const { orderNumber, quantities, items, startTime } = order;

  const startTimeString = new Date(startTime).toLocaleTimeString();

  let headerColor = '';
  if (timerColor === 'green') {
    headerColor = '#5cb85c';
  } else if (timerColor === 'warning') {
    headerColor = '#f0ad4e';
  } else if (timerColor === 'danger') {
    headerColor = '#d9534f';
  }

  return (
    <div className="order-card-header" style={{ backgroundColor: headerColor }} onClick={handleCardClick}>
      <div className="order-card-header__left">
        <h2>Order #{orderNumber}</h2>
        <p>{quantities} {quantities === 1 ? 'item' : 'items'}</p>
      </div>
      <div className="order-card-header__right">
        <p>Time elapsed: {elapsedTimeString}</p>
      </div>
    </div>
  );
};

export default OrderCardHeader;