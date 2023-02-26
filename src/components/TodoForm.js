import React from "react";
import { styled } from "@mui/material";
import addTodoItem from "../addTodoItem";
import TodoItem from "./TodoItem";

const RootStyle = styled("div")(() => ({
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
        if (e.target[0].value === '' || e.target[1].value === '') return null;
        addTodoItem(<TodoItem title={e.target[0].value} text={e.target[1].value} />);
        e.target[0].value = '';
        e.target[1].value = '';
    };

    return (
        <RootStyle>
            <form onSubmit={onSubmit}>
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
