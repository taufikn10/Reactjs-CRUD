//rcc
import React, { Component } from "react";
import Sublifecycle from "./Sublifecycle";

export default class Lifecycle extends Component {
  // rconst untuk membuat constructor
  constructor(props) {
    super(props);

    this.state = {
      makanan: "Bakso",
      data: {},
      tampilHalamanSub: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        // console.log("Halo :", json);
        this.setState({
          data: json,
        });
      });
  }

  ubahMakanan(value) {
    this.setState({
      makanan: value,
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.makanan}</h2>
        {this.state.tampilHalamanSub && (
          <Sublifecycle ubahMakanan={(value) => this.ubahMakanan(value)} />
        )}
        <button
          onClick={() =>
            this.setState({ tampilHalamanSub: !this.state.tampilHalamanSub })
          }
        >
          Tampilkan Halaman Sub
        </button>
        <h2>{this.state.data.title}</h2>
      </div>
    );
  }
}
