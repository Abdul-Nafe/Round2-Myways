import React, { useState, useEffect } from 'react';


const FoodList = () => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [foodTypeFilter, setFoodTypeFilter] = useState('');
  const [maxDeliveryTimeFilter, setMaxDeliveryTimeFilter] = useState(0);

  useEffect(() => {
    const allFoods = JSON.parse(localStorage.getItem('foods') || '[]');
    setFoods(allFoods);
    setFilteredFoods(allFoods);
  }, []);

  useEffect(() => {
    let filteredFoods = foods;
    if (foodTypeFilter) {
      filteredFoods = filteredFoods.filter(food => food.foodType === foodTypeFilter);
    }
    if (maxDeliveryTimeFilter) {
      filteredFoods = filteredFoods.filter(food => food.maxDeliveryTime <= maxDeliveryTimeFilter);
    }
    setFilteredFoods(filteredFoods);
  }, [foodTypeFilter, maxDeliveryTimeFilter, foods]);

  const handleFoodTypeFilterChange = (event) => {
    setFoodTypeFilter(event.target.value);
  };

  const handleMaxDeliveryTimeFilterChange = (event) => {
    setMaxDeliveryTimeFilter(event.target.value);
  };

  return (
    <div className="food-list">
      <div className="filter-section">
        <label htmlFor="food-type-filter">Filter by Food Type:</label>
        <select id="food-type-filter" value={foodTypeFilter} onChange={handleFoodTypeFilterChange}>
          <option value="">All</option>
          <option value="Delicious Food">Delicious Food</option>
          <option value="Nutritious Food">Nutritious Food</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Beverages">Beverages</option>
          <option value="Desserts">Desserts</option>
        </select>
        <label htmlFor="max-delivery-time-filter">Filter by Max Delivery Time:</label>
        <input type="number" id="max-delivery-time-filter" value={maxDeliveryTimeFilter} onChange={handleMaxDeliveryTimeFilterChange} min="0" />
      </div>
      <ul>
        {filteredFoods.map((food, index) => (
          <li key={index}>
            <h3>{food.foodName}</h3>
            <p>Type: {food.foodType}</p>
            <p>Max Delivery Time: {food.maxDeliveryTime} minutes</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
