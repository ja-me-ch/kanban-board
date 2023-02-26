import React, { useEffect, useState } from "react";
import Column from "./Column";
import TodoForm from "./TodoForm";

import { styled } from "@mui/material";
import AddEventListeners from "../drag";

const RootStyle = styled("div")((props) => ({
    // display: 'absolute',
    marginLeft: "0",
    padding: "2.5rem",
    // width: "100%",
    // height: "100vh",
    // border: '1px solid red'
}));

const Lanes = styled("div")((props) => ({
    display: "inline-flex",
    alignItems: "flex-start",
    // flexWrap: 'nowrap',
    gap: "1rem",
    padding: "2rem 0",
    // border: '1px solid red',
}));

function Board() {
    const items1 = [
        { title: "House Work", text: "Do Dishes" },
        { title: "Abc", text: "Dgjkas" },
        { title: "uioew", text: "wreq" },
    ];

    useEffect(() => {
        AddEventListeners();
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
