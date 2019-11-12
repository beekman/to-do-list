import Component from '../Component.js';

class TodoItem extends Component {

    onRender(dom) {
        const todo = this.props.todo;
        const onUpdate = this.props.onUpdate;
        const onRemove = this.props.onRemove;
        const tickButton = dom.querySelector('.tick-button');
        const removeButton = dom.querySelector('.remove-button');

        tickButton.addEventListener('click', () => {
            todo.completed = !todo.completed;
            onUpdate(todo);
        });

        removeButton.addEventListener('click', () => {
            const confirmed = confirm(`Are you sure you want to remove "${todo.name}"?`);
            if (confirmed) {
                onRemove(todo);
            }
        });
    }

    renderHTML() {
        const todo = this.props.todo;

        return /*html*/ `
            <li class="to-do-item"><span class="${todo.inactive ? 'inactive' : ''}">${todo.name}</span>
            <button class="tick-button">
                ${todo.inactive ? 'Complete' : 'Uncomplete'}
                </button>
                <button class="remove-button">
                    Delete
                </button>
            </li>
        `;
    }
}

export default TodoItem;
