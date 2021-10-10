import React, { useState } from "react";
import "./styles.css";

const allFood = {
  "🍇 ": "Grapes",
  "🍈 ": "Melon",
  "🍉 ": "Watermelon",
  "🍌 ": "Banana",
  "🥭 ": "Mango",
  "🍑 ": "Peach",
  "🥦": "Broccoli",
  "🍖": "Meat on Bone",
  "🧅": "Onion",
  "🍄": "Mushroom"
};

var foodWeKnow = Object.keys(allFood);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function foodInputHandler(event) {
    var userInput = event.target.value;

    var meaning = allFood[userInput];
    if (meaning === undefined) {
      meaning = "sorry";
    }
    setMeaning(meaning);
  }
  function foodClickHandler(food) {
    var meaning = allFood[food];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1> food.. </h1>
      <input onChange={foodInputHandler}></input>
      <h2> {meaning} </h2>

      <h3>food we know</h3>
      {foodWeKnow.map(function (food) {
        return (
          <span
            onClick={() => foodClickHandler(food)}
            style={{ fontSize: "1.6rem", cursor: "pointer", padding: "0.6rem" }}
            key={food}
          >
            {food}{" "}
          </span>
        );
      })}
    </div>
  );
}
