import Component from '../Component.js';
import Header from '../common/Header.js';
import Loading from '../common/Loading.js';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';
import { getTodos, addTodo, updateTodo, removeTodo } from '../services/todo-api.js';

class TodoApp extends Component {

    async onRender(dom) {
        const header = new Header({ title: 'My Todos' });
        dom.prepend(header.renderDOM());

        const main = dom.querySelector('main');
        const error = dom.querySelector('.error');

        const loading = new Loading({ loading: true });
        main.appendChild(loading.renderDOM());

        const addTodo = new AddTodo({
            todos: [],
            onAdd: async todo => {
                loading.update({ loading: true });
                // clear prior error
                error.textContent = '';

                // initial todo load:

                try {
                    // part 1: do work on the server
                    const saved = await addTodo(todo);
                    //integrate into our list
                    const todos = this.states.todos;
                    // find the index of this todo:

                    todos.push(saved);

                    todoList.update({ todos });

                    //tell componont to update
                } catch (err) {
                    // display error...
                } finally {
                    loading.update({ loading: false });
                }
            }
        });
        main.appendChild(addTodo.renderDOM());

        const todoList = new TodoList({
            todos: [],
            onUpdate: async todo => {
                loading.update({ loading: true });
                // clear prior error
                error.textContent = '';

                try {
                    // part 1: do work on the server
                    const updated = await updateTodo(todo);

                    // part 2: integrate back into our list
                    const todos = this.state.todos;
                    // find the index of this todo:
                    const index = todos.indexOf(todo);
                    // replace with updated object from server:
                    todos.splice(index, 1, updated);

                    // part 3: tell component to update
                    TodoList.update({ todos });
                } catch (err) {
                    // display error
                    console.log(err);
                } finally {
                    loading.update({ loading: false });
                }
            },


            onRemove: async todo => {
                loading.update({ loading: true });
                // clear prior error
                error.textContent = '';

                try {
                    // part 1: do work on the server
                    await removeTodo(todo.id);

                    // part 2: integrate back into our list
                    const todos = this.state.todos;
                    // find the index of this todo:
                    const index = todos.indexOf(todo);
                    // remove from the list
                    todos.splice(index, 1);

                    // part 3: tell component to update
                    todoList.update({ todos });
                } catch (err) {
                    // display error
                    console.log(err);
                } finally {
                    loading.update({ loading: false });
                }
            }
        });
        main.appendChild(todoList.renderDOM());

        try {
            // get the todos when this component first loads:
            const todos = await getTodos({ showAll: true });
            // store on "this.state" so we can get
            // them back for add, remove, and update:
            this.state.todos = todos;

            // pass the loaded todos to the component:
            todoList.update({ todos });
        } catch (err) {
            // display error
            console.log(err);
        } finally {
            loading.update({ loading: false });
        }

    }

    renderHTML() {
        return /*html*/ `
            <div>
                <!-- header goes here -->
                <!-- show errors: -->
                <p class="error"></p>
                <main>
                    <!-- add todo goes here -->
                    <!-- todo list goes here -->
                </main>
            </div>
        `;
    }
}

export default TodoApp;
