// src/components/MealPlanner.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeroSection from './HeroSection';
import WeekTabs from './WeekTabs';
import MealList from './MealList';
import WeekSelectionModal from './WeekSelectionModal';
import '../styles/MealPlanner.css';

const MealPlanner = () => {
    const [meals, setMeals] = useState([]);
    const [selectedMeals, setSelectedMeals] = useState({ week1: [], week2: [], week3: [], week4: [] });
    const [currentWeek, setCurrentWeek] = useState('all');
    const [modalOpen, setModalOpen] = useState(false);
    const [mealToAdd, setMealToAdd] = useState(null);

    useEffect(() => {
        axios.get('https://dummyjson.com/recipes')
            .then(response => {
                setMeals(response.data.recipes);
            })
            .catch(error => {
                console.error('There was an error fetching the meals!', error);
            });
    }, []);

    const addMealToWeek = (meal, week) => {
        if (!selectedMeals[week].some(m => m.id === meal.id)) {
            setSelectedMeals(prev => ({ ...prev, [week]: [...prev[week], meal] }));
        }
    };

    const deleteMealFromWeek = (meal, week) => {
        setSelectedMeals(prev => ({ ...prev, [week]: prev[week].filter(m => m.id !== meal.id) }));
    };

    const handleAddMealClick = (meal) => {
        setMealToAdd(meal);
        setModalOpen(true);
    };

    const handleSaveMealToWeek = (week) => {
        if (mealToAdd) {
            addMealToWeek(mealToAdd, week);
            setModalOpen(false);
            setMealToAdd(null);
        }
    };

    return (
        <div className="meal-planner">
            <HeroSection />
            <WeekTabs currentWeek={currentWeek} setCurrentWeek={setCurrentWeek} />
            <MealList
                meals={meals}
                currentWeek={currentWeek}
                selectedMeals={selectedMeals}
                addMealToWeek={addMealToWeek}
                deleteMealFromWeek={deleteMealFromWeek}
                handleAddMealClick={handleAddMealClick}
            />
            {modalOpen && (
                <WeekSelectionModal
                    handleSaveMealToWeek={handleSaveMealToWeek}
                    setModalOpen={setModalOpen}
                />
            )}
        </div>
    );
};

export default MealPlanner;
