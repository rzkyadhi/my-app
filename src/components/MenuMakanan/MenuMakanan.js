import React from "react";

let menuMakanan = (props) => {
    return (
    <div style={{ border: "1px solid black", width: 300, margin: "auto"}}>
      <p>Nama menu : {props.namaMenu}</p>
      <p>Harga : Rp {props.hargaMenu}</p>
    </div>
    )
}

export default menuMakanan;