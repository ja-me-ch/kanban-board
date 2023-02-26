import React, { useEffect } from "react";
import Column from "./Column";
import TodoForm from "./TodoForm";

import { styled } from "@mui/material";
import addEventListeners from "../drag";

const RootStyle = styled("div")((props) => ({
    marginLeft: "0",
    padding: "2.5rem",
}));

const Lanes = styled("div")((props) => ({
    display: "inline-flex",
    alignItems: "flex-start",
    gap: "1rem",
    padding: "2rem 0",
}));

function Board() {
    const items1 = [
        { title: "House Work", text: "Do Dishes" },
        { title: "Walk Dog", text: "Walk Dog" },
        { title: "Groceries", text: "Apples" },
    ];

    useEffect(() => {
        addEventListeners();
    });

    return (
        <RootStyle>
            <TodoForm />
            <Lanes>
                <Column props={items1} title={"Planning"} />
                <Column props={items1} title={"Development"} />
                <Column props={items1} title={"Testing"} />
                <Column props={items1} title={"Deployment"} />
            </Lanes>
        </RootStyle>
    );
}

export default Board;
