// src/components/WeekTabs.js
import React from 'react';
import '../styles/WeekTabs.css';

const WeekTabs = ({ currentWeek, setCurrentWeek }) => {
    const weeks = ['all', 'week1', 'week2', 'week3', 'week4'];

    return (
        <div className='week-main' >
            <div className='week-heading'>
            <h1>Weeks  Orders </h1>
            </div>
            <div className="week-tabs">
            {weeks.map(week => (
                <button
                    key={week}
                    className={currentWeek === week ? 'active' : ''}
                    onClick={() => setCurrentWeek(week)}
                >
                    {week === 'all' ? 'All Meals' : `Week ${week.slice(-1)}`}
                </button>
            ))}
            </div>
           
        </div>
    );
};

export default WeekTabs;
