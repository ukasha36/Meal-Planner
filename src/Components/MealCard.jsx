// src/components/MealCard.js
import React from 'react';
import '../styles/MealCard.css';

const MealCard = ({ meal, currentWeek, addMealToWeek, deleteMealFromWeek, handleAddMealClick, selectedMeals }) => {
    const handleDelete = () => {
        if (currentWeek !== 'all') {
            deleteMealFromWeek(meal, currentWeek);
        }
    };

    const isAdded = ['week1', 'week2', 'week3', 'week4'].some(week =>
        selectedMeals[week].some(m => m.id === meal.id)
    );

    return (
        <div className="meal-card">
            <img src={meal.image} alt={meal.title} />
            <h3>{meal.title}</h3>
            <p>{meal.description}</p>
            <p>Rating: {meal.rating}</p>
            {currentWeek === 'all' ? (
                <button onClick={() => handleAddMealClick(meal)} disabled={isAdded}>Add to Week</button>
            ) : (
                <button onClick={handleDelete}>Delete from {currentWeek}</button>
            )}
        </div>
    );
};

export default MealCard;
