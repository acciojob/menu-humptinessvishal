import React from "react";
import FoodData from "./FoodData"

const Button = ({ id, name, setFood }) => {

    function implementDisplay(category) {
        if (category === "all") return setFood(FoodData);
        setFood(FoodData.filter((food) => food.category === category))
    }

    return (
        <button id={id} onClick={() => implementDisplay(name.toLowerCase())}>{name}</button>
    )
}

export default Button;