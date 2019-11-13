import Component from '../Component.js';

class TodoItem extends Component {

    onRender(dom) {
        const todo = this.props.todo;
        const onUpdate = this.props.onUpdate;
        // const onRemove = this.props.onRemove;
        const tickButton = dom.querySelector('.completed-tick');
        // const removeButton = dom.querySelector('.remove-button');

        tickButton.addEventListener('click', () => {
            console.log(todo);
            todo.complete = !todo.complete;
            onUpdate(todo);
        });

        // removeButton.addEventListener('click', () => {
        //     const confirmed = confirm(`Are you sure you want to remove "${todo.task}"?`);
        //     if (confirmed) {
        //         onRemove(todo);
        //     }
        // });
    }

    renderHTML() {
        const todo = this.props.todo;

        return /*html*/ `
            <li class="to-do-item">
                <input type="checkbox" class="completed-tick">
                <span class="${todo.complete ? 'complete' : ''}">${todo.task}</span>
            </li>
        `;
    }
}

export default TodoItem;
