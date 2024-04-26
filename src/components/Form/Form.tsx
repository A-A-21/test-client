import { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const newTodo = {
      uuid: `${Math.ceil(Math.random() * 1000)}-my-super-uuid`,
      title: inputValue,
    };
    await fetch("http://92.255.67.65:8080/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    });
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={inputValue}
          placeholder="new todo"
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">SAVE</button>
      </form>
    </div>
  );
};

export default Form;
