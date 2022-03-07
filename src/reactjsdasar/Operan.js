import React, { Component } from "react";

export default class Operan extends Component {
  // props => hasil operan untuk atasannya
  // gantiMakanan(manaknan_baru) {
  //   this.setState({
  //     makanan: manaknan_baru,
  //   });
  // }

  render() {
    const { makanan, gantiMakanan } = this.props;
    return (
      <div>
        <h2>Operan state yang menjadi Props: {makanan}</h2>
        <button onClick={() => gantiMakanan("Soto")}>Ganti Makanan</button>
      </div>
    );
  }
}
