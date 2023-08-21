import React, { useState } from 'react';
import './App.css';

function Test() {
    // State to keep track of fill boxes and blank boxes
    const [fillBoxes, setFillBoxes] = useState(['Value 1', 'Value 2']);
    const [blankBoxes, setBlankBoxes] = useState([null, null]);

    // Function to handle drag start on a fill box
    const handleDragStart = (event, value) => {
        event.dataTransfer.setData('text/plain', value);
    };

    // Function to handle drag over on a blank box
    const handleDragOver = (event) => {
        event.preventDefault();
    };

    // Function to handle drop on a blank box
    const handleDrop = (event, index) => {
        event.preventDefault();
        const draggedValue = event.dataTransfer.getData('text/plain');
        const newFillBoxes = fillBoxes.filter((value) => value !== draggedValue);
        const newBlankBoxes = [...blankBoxes];
        newBlankBoxes[index] = draggedValue;

        setFillBoxes(newFillBoxes);
        setBlankBoxes(newBlankBoxes);
    };

    // Function to handle click on a filled blank box
    const handleBlankBoxClick = (index) => {
        const clickedValue = blankBoxes[index];
        if (clickedValue) {
            const newFillBoxes = [...fillBoxes, clickedValue];
            const newBlankBoxes = [...blankBoxes];
            newBlankBoxes[index] = null;

            setFillBoxes(newFillBoxes);
            setBlankBoxes(newBlankBoxes);
        }
    };

    return (
        <div className="App">
            <h1>Drag and Drop Example</h1>
            <div className="container">
                {blankBoxes.map((value, index) => (
                    <div
                        key={`blank-${index}`}
                        className={`box blank-box ${value ? 'filled' : ''}`}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, index)}
                        onClick={() => handleBlankBoxClick(index)}
                    >
                        {value}
                    </div>
                ))}
                {fillBoxes.map((value, index) => (
                    <div
                        key={`fill-${index}`}
                        className="box fill-box"
                        draggable
                        onDragStart={(e) => handleDragStart(e, value)}
                    >
                        {value}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Test;
