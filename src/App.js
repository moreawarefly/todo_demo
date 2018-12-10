import React, { useState } from 'react';
import AddEnemyInput from './AddEnemyInput';
import './App.css';

function App() {
  const [enemies, setEnemies] = useState([
    'cat',
    'dog',
    'baby'
  ]);

  function addEnemy(enemyToBeAdded) {
    setEnemies(
      [...enemies, enemyToBeAdded]
    );
  }

  function removeEnemy(enemyToBeRemoved) {
    setEnemies(
      enemies.filter(enemy => enemy !== enemyToBeRemoved)
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        this is where the header was
      </header>
      <AddEnemyInput addEnemy={addEnemy}/>
      <div className="enemies-list">
        {enemies.map(enemy => (
          <button onClick={() => removeEnemy(enemy)} key={enemy}>
            {enemy}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App;
