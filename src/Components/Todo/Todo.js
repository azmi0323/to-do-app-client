import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import WorkToDo from "../WorkToDo/WorkToDo";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("todo").then((res) => {
      setTodo(res.data);
      setLoading(false);
    });
  }, [loading]);

  const handleRemove = (id) => {
    axios.delete(`/todo/${id}`).then((res) => {
      setLoading(true);
      alert('Are you sure, you want to delete this activities? ')
    });
  };
  const handleDone = (id) => {
    axios.put(`/todo/${id}`, { done: true }).then((res) => {
      if (res.data) {
        setLoading(true);
        
      }
    });
  };
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="">
      <WorkToDo setLoading={setLoading}></WorkToDo>
      <div className="container">
      <div className="row g-4  row-cols-lg-3 row-cols-1">
      {todo.map((singleTodo) => (
       <div className="col" key={singleTodo._id}>
          <CardGroup >
          <Card>
            <Card.Body>
              <div className={singleTodo.done?'text-decoration-line-through':''}>
              <Card.Title>{singleTodo.todo.todoName}</Card.Title>
              <Card.Text>{singleTodo.todo.todoBody}</Card.Text>
              </div>
              <button
                onClick={() => handleRemove(singleTodo._id)}
                className="btn me-2 btn-danger"
              >
                delete
              </button>
              <button
                onClick={() => handleDone(singleTodo._id)}
                className="btn btn-success"
              >
                Done
              </button>
            </Card.Body>
          </Card>
        </CardGroup>
       </div>
      ))}
      </div>
      </div>
    </div>
  );
};

export default Todo;
