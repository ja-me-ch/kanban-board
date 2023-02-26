import React from 'react';
import { styled } from '@mui/material';

const RootStyle = styled("div")((props) => ({
    backgroundColor: "#4BCDD6",
    padding: "0.5rem 0.6rem",
    margin: "0.7rem 0",
    overflow: "hidden",
    borderRadius: "5px",
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.3)",
    "&:last-child": {
        marginBottom: "0",
    },
    "&.is-dragging": {
        backgroundColor: "#333",
        boxShadow: "none",
        "h4, span": {
            color: "#4BCDD6",
        },
    },
}));

const Title = styled("h4")({
    margin: "0",
    color: "#EEE",
    fontSize: "1.4rem",
    fontWeight: "600",
});

const Text = styled('span')({
    fontSize: '1.1rem',
    color: '#EEE',
    fontWeight: '500'
})

function TodoItem({title, text}) {
  return (
    <RootStyle draggable='true' className='todo-item'>
          <Title>{title}</Title>
          <Text>{text}</Text>
    </RootStyle>
  )
}

export default TodoItem
