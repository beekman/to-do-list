import Component from '../Component.js';
import Header from '../common/Header.js';
import TodoItem from './TodoItem.js';


class TodoList extends Component {

    onRender(list) {
        const todos = this.props.todos;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;
        const header = new Header({ title: 'To-Do List' });
        const todoItem = new TodoItem(props);
        const todoItemDOM = todoItem.renderDOM();
        list.prepend(header.renderDOM());
        list.appendChild(todoItemDOM);

        todos
    }
    renderHTML() {
        return /*html*/ `
<ul class="to-do-list"></ul>
        `;
    }
}

export default TodoList;
