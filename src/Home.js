import React from "react";
import Thumbnail from "react-webpage-thumbnail";


import Info from "./Info"
import Data from '../data/data'

import '../App.css';



function Home() {
  return (
    <div> 
      <p>
        A list of UCP decisions and impacts.
        Sourced from https://docs.google.com/spreadsheets/d/1zY7Z_BcgpzSW0OmYQh3B16GH_3QjLIbQsN59Ahpvz2M/edit?usp=sharing
      </p>

      {Data.map((e) => {
        return (
          <div>
            <Info name={e.decision} />
            {/* <Thumbnail url={e.source} />; */}

            <a href={e.source}>Source</a>

          </div>
        );
      }
      )
      }
    </div>


  );

}

export default Home;
//https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/