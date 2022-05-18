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
        alert('yeeeeeeee!!!!!!! You have done the activities ')
      }
    });
  };
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <WorkToDo setLoading={setLoading}></WorkToDo>
      {todo.map((singleTodo) => (
        <CardGroup key={singleTodo._id}>
          <Card>
            <Card.Body>
              <Card.Title>{singleTodo.todo.todoName}</Card.Title>
              <Card.Text>{singleTodo.todo.todoBody}</Card.Text>
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
      ))}
    </div>
  );
};

export default Todo;
