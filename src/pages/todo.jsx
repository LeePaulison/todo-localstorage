import { useEffect } from "react";
import { Outlet, useLoaderData, NavLink, Form, useSubmit } from "react-router-dom";
// components
import { ToDoList } from "../components/todo/todoList";
import { Navigation } from "../components/navigation";

const NewToDo = () => (
  <NavLink className='nav-link create' to={`/create`}>
    New To-do
  </NavLink>
);
export const ToDo = () => {
  const { list, q } = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    document.getElementById("search").value = q;
  }, [q]);

  const addToDoNav = (arr = null) => {
    if (arr === null) return;
    return arr.map((todo) => {
      if (todo.title !== "") {
        return (
          <NavLink key={todo.id} to={`/${todo.id}`} className='nav-link'>
            {todo.title}
          </NavLink>
        );
      }
    });
  };

  return (
    <div className='flex flex-col md:flex-row h-full bg-slate-50 overflow-hidden'>
      <div className='flex flex-row gap-4 md:flex-col sm:w-full md:h-full md:w-4/12 xl:w-2/12 md:border-r border-stone-300 p-4 overflow-y-auto'>
        <Form id='search' role='search'>
          <input
            type='search'
            placeholder='Search To-dos'
            className='bg-none'
            name='q'
            defaultValue={q}
            onChange={(evt) => {
              const isFirstSearch = q == null;
              submit(evt.currentTarget.form, { replace: !isFirstSearch });
            }}
          />
        </Form>
        {addToDoNav(list)}
        <NewToDo />
      </div>
      <div className='flex flex-col justify-center items-center w-full'>
        <Navigation />
        <div className='grow flex flex-col justify-center items-center w-full overflow-hidden'>
          {location.pathname === "/" ? <ToDoList list={list} /> : <Outlet />}
        </div>
      </div>
    </div>
  );
};
