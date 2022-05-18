import React, { useState } from "react";
import axios from "axios";

const WorkToDo = ({setLoading}) => {
  const [todoName, setTodoName] = useState("");
  const [todoBody, setTodoBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('todo',{todoName,todoBody,done:false})
    .then(res=>setLoading(true))
  };

  return (
    <div>
      <div className=" my-5 mx-auto w-50 px-5 py-3 form-container">
        <div className="">
          <form onSubmit={handleSubmit} className=" mx-auto">
            <h3 className="text-center text-primary fw-bold pt-4">
              Add Todo Task
            </h3>
            <label className="mt-3 text-primary fw-bold" htmlFor="text">
              Task Name:
            </label>
            <input
              className="w-100 input-field"
              type="text"
              name=""
              onChange={(e) => setTodoName(e.target.value)}
              id=""
              required
            />
            <label className="mt-3 text-primary fw-bold" htmlFor="email">
              Task Details:
            </label>
            <input
              className="w-100 input-field"
              type="textarea"
              name="textarea"
              onChange={(e) => setTodoBody(e.target.value)}
              id=""
              required
            />
            <input
              className=" input-btn d-block mx-auto mt-3"
              type="submit"
              value="Add Task"
            />
          </form>
        </div>
      </div>
      <div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default WorkToDo;
