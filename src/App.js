import styles from './App.module.css';
import Info from './Info.js'
import Data from './data/data'

import { Headerz } from './Headerz'


function App() {
  return (
    <div className="App">
      <Headerz/>
    <div className ={styles.Container}>
      {Data.map((e) => {
        return (
            <div className = {styles.Tile}>
            <Info name={e.decision} />
            <a href={e.source}>Source</a>
          </div>
          
        );
      }
      )
      }
    </div>
    </div>
  );
}

export default App;
