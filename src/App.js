import logo from "./logo.svg";
import "./App.css";
import Album from "./components/home/home";
import Box from "@mui/material/Box";
import React from "react";

class App extends React.Component {
  intervalIds = [];
  intervalId = 0;
  constructor() {
    super();
    this.state = { op: 1};
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
        if(this.state.op > 0.8) this.setState({ op: this.state.op - 0.01 });
    }, 100);
    this.intervalIds.push(this.intervalId);
    
  }

  stopInterval() {
    if (this.state.op <= 0.8) {
      this.intervalIds.forEach(element => {
        clearInterval(element);
      });
    }
  }

  show() {
    return (
      <Box
        sx={{
          bgcolor: "black",
          pt: 8,
          pb: 6,
          opacity: [0.9, 0.5, this.state.op],
        }}
      >
        <Album></Album>
      </Box>
    );
  }

  render() {
    return (
      <div
        className="App"
        style={{
          backgroundImage: `url(https://www.sheknows.com/wp-content/uploads/2020/04/best-gardening-tools-amazon.jpg?w=1920)`,
          backgroundBlendMode: "darken",
          backgroundRepeat: "space",
        }}
      >
        {this.stopInterval()}
        {this.show()}
      </div>
    );
  }
}

export default App;
