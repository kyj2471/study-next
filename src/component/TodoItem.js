// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { deleteTodo, updateTodo } from '../store/actions';

// function TodoItem({ todo }) {
//   const [isEditTodo, setIsEditTodo] = useState(false);
//   const [name, setName] = useState(todo.name);
//   let dispatch = useDispatch();

//   return (
//     <div>
//       <div>
//         <div>#{todo.id.length > 1 ? todo.id[2] : todo.id}</div>
//         <div>
//           {isEditTodo ? (
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => {
//                 setName(e.target.value);
//               }}
//             />
//           ) : (
//             <div>{todo.name}</div>
//           )}
//         </div>
//         <button
//           onClick={() => {
//             dispatch(
//               updateTodo({
//                 ...todo,
//                 name: name
//               })
//             );
//             if (isEditTodo) {
//               setName(todo.name);
//             }
//             setIsEditTodo(!isEditTodo);
//           }}>
//           {isEditTodo ? 'Update' : 'Edit'}
//         </button>
//         <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
//       </div>
//     </div>
//   );
// }

// export default TodoItem;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../store/actions';

function TodoItem({ todo }) {
  const [IsEditTodo, setIsEditTodo] = useState(false);
  const [name, setName] = useState(todo.name);
  let dispatch = useDispatch();

  return (
    <div>
      <div>
        <div>#{todo.id}</div>
        <div>
          {IsEditTodo ? (
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          ) : (
            <h4>{todo.name}</h4>
          )}
        </div>
        <button
          onClick={() => {
            dispatch(
              updateTodo({
                ...todo,
                name: name
              })
            );
            if (IsEditTodo) {
              setName(todo.name);
            }
            setIsEditTodo(!IsEditTodo);
          }}>
          {IsEditTodo ? 'Update' : 'Edit'}
        </button>
        <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
