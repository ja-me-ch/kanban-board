const AddEventListeners = function () {
    const draggables = document.querySelectorAll(".todo-item");
    const droppables = document.querySelectorAll(".todo-items-column");

    draggables.forEach((item) => {
        item.addEventListener("dragstart", () => {
            item.classList.add("is-dragging");
        });
        item.addEventListener("dragend", () => {
            item.classList.remove("is-dragging");
        });
    });

    droppables.forEach((todoscolumn) => {
        todoscolumn.addEventListener("dragover", (e) => {
            e.preventDefault();
            const bottomItem = insertAboveItem(todoscolumn, e.clientY);
            const currItem = document.querySelector(".is-dragging");

            if (bottomItem === undefined) {
                todoscolumn.appendChild(currItem);
            } else {
                todoscolumn.insertBefore(currItem, bottomItem.element);
            }
        });
    });

    const insertAboveItem = function (todoscolumn, mouseY) {
        const elements = [
            ...todoscolumn.querySelectorAll(".todo-item:not(.is-dragging)"),
        ];

        return elements.reduce(
            (closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = mouseY - box.top - box.height / 2;
                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            },
            { offset: Number.NEGATIVE_INFINITY }
        );

    };
};

export default AddEventListeners;
