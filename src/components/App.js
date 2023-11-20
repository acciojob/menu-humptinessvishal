import React, { useState } from "react";
import FoodData from "./FoodData";
import Button from "./Button";
import DisplayMenu from "./DisplayMenu";


const App = () =>{
    const[food,setFood] = useState(FoodData);
     
    return(
        
        <div>
          <h1 className="heading">Our Menu</h1>
          <div className="button-container">
             <Button id="main" name="All" setFood={setFood} />
             <Button id="filter-btn-1" name="Breakfast" setFood={setFood} />
             <Button id="filter-btn-2" name="Lunch" setFood={setFood} />
             <Button id="filter-btn-3" name="Shakes" setFood={setFood} />
          </div>
          <DisplayMenu food={food}/>
        </div>
    )
}


export default App;
