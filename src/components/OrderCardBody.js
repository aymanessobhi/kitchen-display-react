import React from 'react';

const OrderCardBody = ({ order }) => {
  const { quantities, items } = order;

  return (
    <div className="order-card-body">
      {items.map((item, index) => (
        <div key={index}>
          <p>{item}</p>
          {item.includes('+') && (
            <div className="nested-items">
              {item.split('+').map((nestedItem, nestedIndex) => (
                <p key={nestedIndex}>{nestedItem.trim()}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderCardBody;
