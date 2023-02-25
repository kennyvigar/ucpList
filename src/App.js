import styles from './App.module.css';
import Info from './Info.js'
import Data from './data/data'

import { Headerz } from './Headerz'

let date =  new Date().getFullYear();

const year = date

function App() {
  return (
    
    <div >
    <div className={styles.image}></div>

      <Headerz/>
    <div className ={styles.Container}>
      <div className = {styles.TileContainer}>
      {Data.map((e) => {
        return (
            <div className = {styles.Tile}>
            <Info name={e.decision}/>
            <a href={e.source}>Source</a>
            <p className={styles.ParaSmall}>{e.Ministry}</p>
            
          </div>
          
        );
      }
      )
      }
    </div>
    </div>
    <div className={styles.Foot}>Sourced and Published - {JSON.stringify(year)}</div>

    </div>
  );
}

export default App;
