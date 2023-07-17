import React, { useEffect } from "react";
import "./App.css";
import RefreshButton from "./RefreshButton.js";
import axios from "axios";
import { useState } from "react";
import './GridContainer.css'; 

function App() {


  const [state, setstate] = useState({});
  const [state1, setstate1] = useState({});
  const [state2, setstate2] = useState("");
  const [state3, setstate3] = useState({});
  const [state4, setstate4] = useState({});
  const [state5, setstate5] = useState({});
  const [state6, setstate6] = useState({});
  const [state7, setstate7] = useState({});
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        console.log(res.data.results);
        console.log(res.data.results[0].gender);
        console.log(res.data.results[0].picture.large);
        setstate1(res.data.results[0].email);
        setstate5(res.data.results[0].dob.date);
        setstate3(res.data.results[0].dob.age);
        setstate4(res.data.results[0].gender);
        setstate(res.data.results[0].name);
        setstate6(res.data.results[0].id.name);
        setstate7(res.data.results[0].location.city);

        
        setstate2(res.data.results[0].picture.large);
      })
      .catch((err) => {
        console.log("not working + " + err);
      });
  }, []);

  return (
    <div className="container">
    <div className="grid-container">
      <div className="grid-item">
      <div className="grid">
      <img src={state2}  alt={Image}/></div>
      <table>
      <div> <tr><td>Name:</td><td>{JSON.stringify(state)}</td></tr></div>
      <div><tr><td>E-mail:</td><td>{JSON.stringify(state1)}</td></tr></div>
      <div><tr><td>Age             :</td><td>{JSON.stringify(state3)}</td></tr></div>
      <div><tr><td>gender:</td><td>{JSON.stringify(state4)}</td></tr></div>
      <div><tr><td>cell-no :</td><td>{JSON.stringify(state5)}</td></tr></div>
      <div><tr><td>Id-Name:</td><td>{JSON.stringify(state6)}</td></tr></div>
      <div><tr><td>City:</td><td>{JSON.stringify(state7)}</td></tr></div>
      </table>
      <div className="centered"><RefreshButton/></div>
      </div>
    </div>
    </div>
  );
}

export default App;
