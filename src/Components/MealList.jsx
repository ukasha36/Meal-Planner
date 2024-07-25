// src/components/MealList.js
import React from 'react';
import MealCard from './MealCard';
import '../styles/MealList.css';

const MealList = ({ meals, currentWeek, selectedMeals, addMealToWeek, deleteMealFromWeek, handleAddMealClick }) => {
    const filteredMeals = currentWeek === 'all' ? meals : selectedMeals[currentWeek] || [];

    if (!filteredMeals || filteredMeals.length === 0) {
        return <div className='nomeal'>No meals available</div>;
    }

    return (
        <div className="meal-list">
            {filteredMeals.map(meal => (
                <MealCard
                    key={meal.id}
                    meal={meal}
                    currentWeek={currentWeek}
                    addMealToWeek={addMealToWeek}
                    deleteMealFromWeek={deleteMealFromWeek}
                    handleAddMealClick={handleAddMealClick}
                    selectedMeals={selectedMeals}
                />
            ))}
        </div>
    );
};

export default MealList;
