import React, { ReactDOM } from "react";
import { styled } from "@mui/material";
import AddTodoItem from "../addTodoItem";
import TodoItem from "./TodoItem";

const RootStyle = styled("div")(() => ({
    // border: '1px solid red',
    display: "flex",
}));

const ButtonStyle = styled("button")(() => ({
    height: "3rem",
    width: "3rem",
    border: "none",
    borderRadius: "5px",
}));

const InputStyle = styled("input")(() => ({
    height: "90%",
    marginRight: "1rem",
    paddingLeft: "1rem",
    borderRadius: "6px",
    outline: "none",
    border: "none",
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.7)",
}));

function TodoForm() {
    const onSubmit = function (e) {
        e.preventDefault();
        AddTodoItem(<TodoItem title={e.target[0].value} text={e.target[1].value} />);
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // const element = <h1>Hello, world</h1>;
        // root.render(element);
    };

    return (
        <RootStyle>
            <form onSubmit={onSubmit}>
                {/* <button type="submit" disabled></button> */}
                <InputStyle
                    type={"text"}
                    placeholder={"New Title"}
                    className={"newTitle"}
                ></InputStyle>
                <InputStyle
                    type={"text"}
                    placeholder={"New Todo"}
                    className={"newTodo"}
                ></InputStyle>
                <ButtonStyle type="submit">Add</ButtonStyle>
            </form>
        </RootStyle>
    );
}

export default TodoForm;
