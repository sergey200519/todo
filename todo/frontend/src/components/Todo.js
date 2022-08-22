import React from "react";

const TodoItem = ({todo}) => {
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
        </tr>
    )
}


const TodoList = ({notes}) => {

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
            {notes.map((todo) => <TodoItem todo={todo}/>)}
        </table>
    )
}

export default TodoList
