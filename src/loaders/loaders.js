import { getAllTodos, getTodoById } from "../resolvers";

export async function allToDoLoader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const list = await getAllTodos(q);
  return { list, q };
}

export async function todoLoader({ params }) {
  const todo = await getTodoById(params.todoId);
  return { todo };
}
