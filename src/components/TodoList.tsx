import "./styles.css";
import { Todo } from "./model";
import SingleTodo from "./SingleTodo";
import { Actions } from "../reducer";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<Actions>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos?.map((todo: Todo) => (
        <SingleTodo
          todo={todo}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
