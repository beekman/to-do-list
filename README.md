Full-stack To-Do List
===

Todo App with page for tracking a single list of To-Do Items

1. Displays a list of to-dos and indicate whether or not complete
1. Has a form for adding a to-do
1. Marks a to-do as complete
1. Removes to-do items

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
