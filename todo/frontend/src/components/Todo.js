import React from "react";

const TodoItem = ({todo, deleteTodo}) => {
    return (
        <tr>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.text}
            </td>
            <td>
                {todo.time_created}
            </td>
            <td>
                {todo.time_updated}
            </td>
            <td>
                {todo.user}
            </td>
            <td>
                {todo.is_active}
            </td>
            <td>
              <button onClick={() => deleteTodo(todo.id)} type="button">удалить</button>
            </td>
        </tr>
    )
}


const TodoList = ({notes, deleteTodo}) => {

    return (
        <table>
            <th>
                Project
            </th>
            <th>
                Text
            </th>
            <th>
                Time created
            </th>
            <th>
                Time updated
            </th>
            <th>
                Users
            </th>
            <th>
                Is active
            </th>
            <th>
            </th>
            {notes.map((todo) => <TodoItem todo={todo} deleteTodo={deleteTodo}/>)}
        </table>
    )
}

export default TodoList
