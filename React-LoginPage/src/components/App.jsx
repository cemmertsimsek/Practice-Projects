import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date(2022, 11, 1, 9).getHours();

function App() {
  return (
    <div className="container">
      {
        //TERNARY OPERATOR
        //isLoggedIn ? <h1>Hello</h1> : <Login />
        //currentTime > 12 ? <h1>Why are you still working?</h1> : null
        //&& OPERATOR
        //currentTime > 12 && <h1>Why are you still working?</h1>
        //We can use this method for not checking both condition is true. but we know if the first condition is false JS is not going for the expression
      }
    </div>
  );
}

export default App;
