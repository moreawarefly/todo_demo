import React, { useState } from 'react';
import './App.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       enemies: ['cat', 'dog', 'baby'],
//     };
//   }
//   removeEnemy = (enemyToRemove) => {
//     this.setState({ enemies: this.state.enemies.filter(enemy => enemy !== enemyToRemove)});
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           this is where the header was
//         </header>
//         <div className="enemies-list">
//           {this.state.enemies.map(enemy => (
//             <button onClick={() => this.removeEnemy(enemy)} key={enemy}>
//               {enemy}
//             </button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

function App() {
  const [enemies, setEnemies] = useState([
    'cat',
    'dog',
    'baby'
  ]);

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
