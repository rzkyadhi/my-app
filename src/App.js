import logo from './logo.svg';
import './App.css';
import MenuMakanan from "./components/MenuMakanan/MenuMakanan.js";
import MenuMinuman from "./components/MenuMinuman/MenuMinuman.js"
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      namaResto: "Codepolitan"
    };
  }

  handleGantiNama = (nama) => {
    console.log("Button di klik.")
    this.setState({ namaResto: nama});
  }

  render(){
    return(
      <div className="App">
      <h1>Cafe and Resto {this.state.namaResto}</h1>
      <button onClick= {() => this.handleGantiNama("Cipedes")}>Ganti nama resto</button>
      <h2>Menu Makanan</h2>
      <MenuMakanan namaMenu={"Ayam Bakar"} hargaMenu={25000}/>
      <MenuMakanan namaMenu={"Nasi Goreng"} hargaMenu={10000}/>
      <h2>Menu Minuman</h2>
      <MenuMinuman namaMenu={"Juice Melon"} hargaMenu={30000}/>
      <MenuMinuman namaMenu={"Es Krim"} hargaMenu={10000}/>
    </div>
    )
  }
}

export default App;
