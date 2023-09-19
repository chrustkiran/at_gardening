import logo from "./logo.svg";
import "./App.css";
import Album from "./components/home/home";
import Box from "@mui/material/Box";
import React from "react";

class App extends React.Component {
  intervalId = 0;
  constructor() {
    super();
    this.state = { op: 0.85};
  }

  componentDidMount() {
    // this.intervalId = setInterval(() => {
    //   if (this.state.op > 0.8) {
    //     this.setState({ op: this.state.op - 0.1 });
    //   } 
    //   console.log("hitting..." + this.intervalId);
    // }, 100);
  }

  vis() {
    if (this.state.op <= 0.8) {
      clearInterval(this.intervalId);
      console.log("clearInterval " + this.intervalId)
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
        {this.vis()}
        {this.show()}
      </div>
    );
  }
}

export default App;
