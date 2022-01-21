import React from "react";
import "./App.css";
import { Container } from "./components/container/index.js";
import { Home } from "./components/home/index.js";
import { Result } from "./components/result/index.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
      totalPoints: 0,
    };
  }
  handleChangeView = (newView) => {
    this.setState({ view: newView });
  };
  handleGetResults = (points) => {
    let totalPoints = 0;
    Object.keys(points).forEach((key) => {
      totalPoints = totalPoints + points[key].points;
    });

    this.setState({ view: "result", totalPoints });
  };
  render() {
    const { view, totalPoints } = this.state;
    if (view === "home") {
      return <Home handleChangeView={this.handleChangeView} />;
    } else if (view === "result") {
      return (
        <Result
          totalPoints={totalPoints}
          handleChangeView={this.handleChangeView}
        />
      );
    } else {
      return <Container handleGetResults={this.handleGetResults} />;
    }
  }
}

export default App;
