import { useState, FC, ChangeEvent, KeyboardEvent } from "react";
import type { Todo } from "@/types/todo";
import { FaRegTrashAlt } from "react-icons/fa";

const TodoApp: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setInputValue("");
    }
  };

  const handleToggleComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing || e.key !== "Enter") {
      return;
    }
    handleAddTodo();
  };

  return (
    <div className="max-w-lg mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Todo アプリ</h1>

      <div className="flex mb-4">
        <input
          type="text"
          className="rounded-md m-2 p-2 flex-1 border outline-none focus:ring-2 focus:ring-orange-300"
          placeholder="TODOを入力してね"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          className="rounded-md m-2 px-4 py-2 bg-orange-300 text-white font-semibold"
          onClick={handleAddTodo}
        >
          追加
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`flex items-center ${
              todo.completed ? "line-through text-gray-400" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(todo.id)}
              className="mr-2 form-checkbox"
            />
            <span>{todo.text}</span>
            <button
              className="ml-auto text-red-500"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              <FaRegTrashAlt />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
