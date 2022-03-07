import React from "react";

// var
/*
var harga = 20000;
if (true) {
  var harga = 30000;
}
*/

//const
/*
const harga = 3000;
harga = 300;
*/

//let
let harga = 20000;
harga = 30000;
/*
if (true) {
  let harga = 30000;
}
*/

const Variabel = () => {
  return (
    <div>
      <h2>Harga : {harga}</h2>
    </div>
  );
};

export default Variabel;
