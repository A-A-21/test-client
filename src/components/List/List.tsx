import { useEffect, useState } from "react";

export type TypeTodo = { title: string; uuid: string };

const List = () => {
  const [todos, setTodos] = useState<TypeTodo[]>([]);

  useEffect(() => {
    fetch("http://92.255.67.65:8080/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={todo.uuid}>
          {index + 1}
          <div>{todo.title}</div>
        </div>
      ))}
    </div>
  );
};

export default List;
