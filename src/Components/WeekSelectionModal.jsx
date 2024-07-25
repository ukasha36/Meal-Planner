// src/components/WeekSelectionModal.js
import React from 'react';
import '../styles/WeekSelectionModal.css';

const WeekSelectionModal = ({ handleSaveMealToWeek, setModalOpen }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Select a week to add the meal</h2>
                <div className="week-buttons">
                    {['week1', 'week2', 'week3', 'week4'].map(week => (
                        <button key={week} onClick={() => handleSaveMealToWeek(week)}>
                            {`Week ${week.slice(-1)}`}
                        </button>
                    ))}
                </div>
                <button className="close-button" onClick={() => setModalOpen(false)}>Close</button>
            </div>
        </div>
    );
};

export default WeekSelectionModal;
