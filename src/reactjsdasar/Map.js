//rface
import React from "react";

const makanan = [
  {
    nama: "Soto",
    harga: 12000,
  },
  {
    nama: "Bakso",
    harga: 15000,
  },
  {
    nama: "Mie Ayam",
    harga: 7000,
  },
  {
    nama: "Nasi Goreng",
    harga: 10000,
  },
];

// Reduce
const total_bayar = makanan.reduce(
  (total_harga, makanan) => total_harga + makanan.harga,
  0
);

const Map = () => {
  return (
    <div>
      {/* Map */}
      <h2>Map Sederhana</h2>
      <ul>
        {makanan.map((makanan, index) => (
          <li>
            {index + 1}.{makanan.nama} - Harga{makanan.harga}
          </li>
        ))}
      </ul>

      {/* Filter */}
      <h2>Map Filter Harga yang lebih dari 10000</h2>
      <ul>
        {makanan
          .filter((makanan) => makanan.harga > 10000)
          .map((makanan, index) => (
            <li>
              {index + 1}.{makanan.nama} - Harga{makanan.harga}
            </li>
          ))}
      </ul>

      {/* Reduce */}
      <h3>Total Harga : {total_bayar}</h3>
    </div>
  );
};

export default Map;
