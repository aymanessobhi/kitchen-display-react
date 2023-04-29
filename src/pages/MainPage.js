import React, { useState } from 'react';
import OrderList from '../components/OrderList';
import Timer from '../components/Timer';

const MainPage = () => {
  const [orders, setOrders] = useState([
    {
      orderNumber: 1,
      quantities: 3,
      items: ['Pizza', 'Coke', 'Fries'],
      startTime: Date.now(),
      status: 'Pending',
    },
    {
      orderNumber: 5,
      quantities: 3,
      items: ['Pizza', 'Coke', 'Fries'],
      startTime: Date.now(),
      status: 'Pending',
    },
    {
      orderNumber: 2,
      quantities: 2,
      items: ['Burger', 'Sprite'],
      startTime: Date.now() - 120000,
      status: 'Pending',
    },
    {
      orderNumber: 123,
      quantities: 2,
      items: ['Cheeseburger', 'Fries + Ketchup'],
      startTime: Date.now() - 60000,
      status: 'Pending',
    },
    {
        orderNumber: 123,
        quantities: 2,
        items: ['Cheeseburger', 'Fries + Ketchup'],
        startTime: Date.now() - 60000,
        status: 'Pending',
      },
    {
      orderNumber: 3,
      quantities: 1,
      items: ['Salad'],
      startTime: Date.now() - 300000,
      status: 'Pending',
    },
  ]);

  // Define the number of orders to show per page
  const ordersPerPage = 4;

  // Set the current page number to 1
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages based on the number of orders and orders per page
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  // Calculate the starting index of the orders to show on the current page
  const startIndex = (currentPage - 1) * ordersPerPage;

  // Calculate the ending index of the orders to show on the current page
  const endIndex = startIndex + ordersPerPage;

  // Get the orders to show on the current page
  const currentOrders = orders.slice(startIndex, endIndex);

  // Define a function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCompleteOrder = (orderNumber) => {
    const updatedOrders = orders.map((order) => {
      if (order.orderNumber === orderNumber) {
        return {
          ...order,
          completed: true,
        };
      }
      return order;
    });
    setOrders(updatedOrders);
  };
  return (
    <div className="main-page">
      <h1 className="title">Kitchen Display System</h1>
      <Timer />
      <OrderList orders={currentOrders} handleCompleteOrder={handleCompleteOrder} />
      <div>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button key={index} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
