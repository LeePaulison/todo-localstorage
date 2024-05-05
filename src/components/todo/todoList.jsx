import PropTypes from "prop-types";
import { ToDoItem } from "./todoItem";

export const ToDoList = ({ list }) => {
  console.log("ToDoList", list);

  return (
    <div className='flex flex-col items-center w-full p-4 my-auto overflow-y-auto'>
      {list.length > 0 ? (
        list.map((todo) => (
          <>
            <h1 className='pb-4'>To-do List</h1>
            <ToDoItem key={todo.id} todo={todo} />
          </>
        ))
      ) : (
        <>
          <h1>Instructions</h1>
          <p>To create a new To-do please select the New To-do button on the left.</p>
        </>
      )}
    </div>
  );
};

ToDoList.propTypes = {
  list: PropTypes.array,
};
