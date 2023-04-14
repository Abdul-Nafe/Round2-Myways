import React, { useState } from 'react';
import "./FoodForm.css";

const FoodForm = () => {
  const [foodName, setFoodName] = useState('');
  const [foodType, setFoodType] = useState('Delicious Food');
  const [maxDeliveryTime, setMaxDeliveryTime] = useState(0);

  const handleFoodNameChange = (event) => {
    setFoodName(event.target.value);
  };

  const handleFoodTypeChange = (event) => {
    setFoodType(event.target.value);
  };

  const handleMaxDeliveryTimeChange = (event) => {
    setMaxDeliveryTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newFoodItem = {
      foodName,
      foodType,
      maxDeliveryTime
    };

    const foods = JSON.parse(localStorage.getItem('foods') || '[]');
    localStorage.setItem('foods', JSON.stringify([...foods, newFoodItem]));

    setFoodName('');
    setFoodType('Delicious Food');
    setMaxDeliveryTime(0);
  };

  return (
    <form   onSubmit={handleSubmit}>
      <div >
        <label htmlFor="food-name">Food Name:</label>
        <input type="text" id="food-name" value={foodName} onChange={handleFoodNameChange} required />
      </div>
      <div>
        <label htmlFor="food-type">Food Type:</label>
        <select id="food-type" value={foodType} onChange={handleFoodTypeChange} required>
          <option value="Delicious Food">Delicious Food</option>
          <option value="Nutritious Food">Nutritious Food</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Beverages">Beverages</option>
          <option value="Desserts">Desserts</option>
        </select>
      </div>
      <div>
        <label htmlFor="max-delivery-time">Max Delivery Time (in minutes):</label>
        <input type="number" id="max-delivery-time" value={maxDeliveryTime} onChange={handleMaxDeliveryTimeChange} min="0" required />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FoodForm;
