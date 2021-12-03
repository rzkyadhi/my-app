import React from "react";

let menuMakanan = (props) => {
  if(props.stokMenu !== 0 ){
    return (
      <div style={{ border: "1px solid black", width: 300, margin: "auto"}}>
        <p>Nama menu : {props.namaMenu}</p>
        <p>Harga : Rp {props.hargaMenu}</p>
        <p>Stock : {props.stokMenu}</p>
      </div>
      )
  } else {
    return null;
  }
}

export default menuMakanan;