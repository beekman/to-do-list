import Component from '../Component.js';
import TodoItem from './TodoItem.js';

class AddTodo extends Component {

    onRender(form) {
        const onAdd = this.props.onAdd;
        const input = form.querySelector('input[name=todo]');
        form.addEventListener('submit', async event => {
            event.preventDefault();
            const newTodo = {
                task: input.value,
                complete: false
            };
            try {
                await onAdd(newTodo);
                // this only runs if no error:
                form.reset();
                document.activeElement.blur();
            } catch (err) {
                // nothing to do as App will show error,
                // but will keep form from clearing...
            }
        });
    }

    renderHTML() {
        return /*html*/ `
            <form>
                <input name="todo" required>
                <button>Add</button>
            </form>
        `;
    }
}

export default AddTodo;
