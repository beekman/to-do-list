LAB 11: Fullstack TODO list
===

Todo App with page for tracking a single list of TODOs

1. Displays a list of todos and indicate whether or not complete
1. Has a form for adding a todo
1. Marks a todo as complete
1. Removes todo items

## Todo Data

Looks like:

```js
{
    task: 'Thing to do',
    completed: false
}
```

## App

- `TodoApp`
    - `AddTodo` (props: `onAdd`)
    - `TodoList` (props: `todos`, `onUpdate`, STRETCH: `onRemove`)
        - [`TodoItem`] (props: `todo`, `onUpdate`, `onRemove`)

### API Services

1. `getTodos()`
1. `addTodo(todo)`
1. `updateTodo(todo)`
1. STRETCH: `removeTodo(todoId)`

## Server 

Route | SQL
---|---
`GET /todos` | `SELECT`
`POST /todos` | `INSERT` w/ `RETURNING`
`PUT /todos/:id` | `UPDATE` w/ `RETURNING`
`DELETE /todos/:id` `DELETE
