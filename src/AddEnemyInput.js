import React, { useState } from 'react';

function AddEnemyInput(props) {
    const [enemy, setEnemy] = useState('');

    function setEnemyName(e) {
        setEnemy(e.target.value);
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            props.addEnemy(enemy);
            setEnemy('');
        }
    }

    return (
        <input
            type="text"
            value={enemy}
            onChange={setEnemyName}
            onKeyPress={handleKeyPress}
        />
    )
}

export default AddEnemyInput;
