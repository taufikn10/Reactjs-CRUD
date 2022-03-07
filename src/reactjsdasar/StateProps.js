// State lebih baik menggunakan (rcc) atau class component
import React, { Component } from "react";
import Operan from "./Operan";

export default class StateProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: "Bakso",
    };
  }

  gantiMakanan = (makanan_baru) => {
    this.setState({
      makanan: makanan_baru,
    });
  };

  render() {
    return (
      <div>
        <h2>Menu</h2>
        <h3>Makanan : {this.state.makanan}</h3>
        <button onClick={() => this.gantiMakanan("Soto")}>Ganti Makanan</button>
        <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan} />
      </div>
    );
  }
}
