import React, { useState, useEffect } from "react";
import { sendData, getData } from "../config/firebasemathod";
import "../App.css";
const Addtodo = () => {
  const [model, setModel] = useState("");

  const addTodo = () => {
    sendData("users", model)
      .then((res) => {
        // console.log("Data Send Successfully");
        alert("Task added successfully");
        setModel("");
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  };
  const get = () => {
    getData("users");
  };

  useEffect(() => {
    get();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Todo App </h1>
      <div class="input-container">
        <input
          type="text"
          placeholder="Add Item"
          value={model}
          onChange={(e) => {
            setModel(e.target.value);
          }}
        />
        <button class="button" onClick={addTodo}>
          Add
        </button>
      </div>
    </div>
  );
};

export default Addtodo;
