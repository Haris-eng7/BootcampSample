import React from "react";
import "./App.css";
import Dinner from "./Dinner";

function App() {
  return (
    <div>
      <h1>Hello WOrld!</h1>;
      <Dinner />
      <Dinner dishName="Mutton Biryani" />
    </div>
  );
}

export default App;
