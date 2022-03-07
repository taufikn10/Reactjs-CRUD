import React, { Component } from "react";

//class Component (rcc) => komponen besar make ini
// export default class Navbar extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Navbar</h2>
//       </div>
//     );
//   }
// }

//function Component (rfc) => jarang koponen
// export default function Navbar() {
//   return (
//     <div>
//       <h2>Navbar</h2>
//     </div>
//   );
// }

//arrow function component (rfac) => komponen kecil" make ini
export const Navbar = () => {
  return (
    <div>
      <h2>Navbar</h2>
    </div>
  );
};

// export default Navbar;
