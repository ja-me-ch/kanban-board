import React from "react";
import { styled } from "@mui/material";
import TodoItem from "./TodoItem";

const RootStyle = styled("div")((props) => ({
    margin: "0",
    backgroundColor: "rgba(44, 85, 145, 0.7)",
    padding: "1rem",
    borderRadius: "5px",
    minWidth: "11rem",
    width: "auto",
    height: "100%",
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.6)",
}));

const TodoItems = styled("div")((props) => ({
    minHeight: "7rem",
}));

const Title = styled("h4")(() => ({
    margin: "0",
    fontSize: "1.7rem",
    color: "#EEE",
}));

function Column({ props, title }) {
    const items = props.map((e) => {
        return <TodoItem title={e.title} text={e.text} />;
    });

    return (
        <RootStyle className="column">
            <Title>{title}</Title>
            <TodoItems className="todo-items-column">{items}</TodoItems>
        </RootStyle>
    );
}

export default Column;
