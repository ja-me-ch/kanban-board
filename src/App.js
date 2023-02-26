import "./App.css";
import Board from "./components/Board";
import { styled } from "@mui/material";

const RootStyle = styled("div")({
  margin: '0',
});

function App() {
    return (
        <RootStyle>
            <Board />
        </RootStyle>
    );
}

export default App;
