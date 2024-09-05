import React, { useState, useEffect } from "react";
import { GenerateNumbers } from "./Answer";
import { GuessInfo } from "./GuessInfo";
import "./Game.css";

function UserGreeting(props) {
  return <h1>{homerun</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
// Try changing to isLoggedIn={true}:
root.render(<Greeting isLoggedIn={true} />);