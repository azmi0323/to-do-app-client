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
      setLoading(true)
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
                className="btn-danger"
              >
                delete
              </button>
              <button className="btn-success">update</button>
            </Card.Body>
          </Card>
        </CardGroup>
      ))}
    </div>
  );
};

export default Todo;
