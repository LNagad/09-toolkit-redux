import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from './store/apis/todosApi';

export const TodoApp = () => {

   const [todoId, setTodoId] = useState(1);
   //  const { data: todos = [], isLoading } = useGetTodosQuery();
   const { data: todo, isLoading } = useGetTodoQuery(todoId);

   const nextTodo = () => {
      setTodoId( todoId + 1);
   };

   const prevTodo = () => {
      if ( todoId === 1 ) return;
      setTodoId( todoId - 1);
   };
   
   return (
      <>
         <h1>TodoApp -RTK Query</h1>
         <hr />
         <h4>isLoading { isLoading ? 'True' : 'False'}</h4>

         <p> The RTK - Query loads queries in cache by using the refux store
             to increase performance in case the same request is called
             in a frame time of 1 minute by default and is capable of auto manage
             itself to remove the query from the store by default 
         </p>

         <pre>{ JSON.stringify(todo, null, 2) }</pre>

         {/* <ul>
            {
               todos.map( todo => (
                  <li key={todo.id}>
                     <strong> { todo.completed ? 'DONE' : 'Pending' } </strong>
                     {todo.title}
                  </li>
               ) )
            }
         </ul> */}
         <button 
            style={{ marginRight: '10px'}}
            onClick={ prevTodo}>Previous Todo
         </button>
         
         <button onClick={ nextTodo }>Next Todo</button>
      </>
   );
};
