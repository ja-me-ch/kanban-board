import ReactDOMServer from 'react-dom/server'
import { addDragEventListeners } from "./drag";

const AddTodoItem = function (todoItem) {
    const firstColumn = document.querySelector(
        ".column:first-child .todo-items-column .todo-item:last-child"
    );
    const renderedTodoItem = ReactDOMServer.renderToString(todoItem);
    firstColumn.insertAdjacentHTML("afterend", renderedTodoItem);
    const recentlyAddedItem = document.querySelector('.column:first-child .todo-items-column .todo-item:last-child');
    addDragEventListeners(recentlyAddedItem);
};

export default AddTodoItem;
