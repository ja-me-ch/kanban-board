import ReactDOMServer from 'react-dom/server'
import AddEventListeners from "./drag"


const AddTodoItem = function (todoItem) {
    const firstColumn = document.querySelector(".column:first-child .todo-items-column");
    console.log(firstColumn[0]);
    console.log(todoItem);
    console.log(firstColumn[0]);
    const reactele = ReactDOMServer.renderToString(todoItem);
    console.log(reactele);
    firstColumn.insertAdjacentHTML('afterend', reactele)
    AddEventListeners();
    // firstColumn[0].appendChild();
    // console.log(renderedComp)


};

export default AddTodoItem;
