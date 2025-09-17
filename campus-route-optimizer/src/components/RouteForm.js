import React, { useState } from 'react';

const RouteForm = ({ onCalculateRoute }) => {
    const [startPoint, setStartPoint] = useState('');
    const [endPoint, setEndPoint] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (startPoint && endPoint) {
            onCalculateRoute(startPoint, endPoint);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="startPoint">Starting Point:</label>
                <input
                    type="text"
                    id="startPoint"
                    value={startPoint}
                    onChange={(e) => setStartPoint(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="endPoint">Destination:</label>
                <input
                    type="text"
                    id="endPoint"
                    value={endPoint}
                    onChange={(e) => setEndPoint(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Calculate Route</button>
        </form>
    );
};

export default RouteForm;