import React, { Component } from "react";
import { socket, getWeather } from "./api";

class App extends Component {
  constructor() {
    super();

    this.state = {
      response: false
    };
  }
  componentDidMount() {
    socket.on("CurrentStudents", data => this.setState({ response: data }));
  }

  render() {
    const { response } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        {response
          ? <p>
            The temperature in Florence is: {response} °F
              </p>
          : <p>Loading...</p>}
        <button onClick={getWeather}> Get Weather </button>
      </div>
    );
  }
}
export default App;