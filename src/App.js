import logo from './logo.svg';
import './App.css';
import MenuMakanan from "./components/MenuMakanan/MenuMakanan.js";
import MenuMinuman from "./components/MenuMinuman/MenuMinuman.js"
import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      namaResto: "Codepolitan",
      namaPembeli: "",
      keterangan: "",
      jenisPembayaran: "",
      menuMakanan: [
        {nama: "Ayam Bakar", harga: 25000, stock: 10},
        {nama: "Nasi Goreng", harga: 25000, stock: 0}
      ],
      menuMinuman: [
        {id: 1,nama: "Juice Melon", harga: 5000},
        {id: 2,nama: "Juice Tomat", harga: 2000},
        {id: 3,nama: "Es Krim", harga: 1000},
        {id: 4,nama: "Es Doger", harga: 9000}
      ]
    };
  }

  handleGantiNama = (nama) => {
    console.log("Button di klik.")
    this.setState({ namaResto: nama});
  }

  handleGanti = (event) => {
    let name = event.target.name
    let value = event.target.value
    this.setState({ [name] : value})
  }

  render(){
    return(
      <div className="App">
      <h1>Cafe and Resto {this.state.namaResto}</h1>
      <button className="btn btn-primary" onClick= {() => this.handleGantiNama("Cipedes")}>Ganti nama resto</button>
      <div className="row" style={{marginTop: '10px'}}>
        <div className="col-md-4 offset-md-4">
          <form>
            <div className="form-group">
              <label>Nama Pembeli: </label>
              <input 
              className="form-control" 
              name="namaPembeli" 
              onChange={this.handleGanti} 
              value={this.state.namaPembeli}
              ></input>
              <small>Nama Pembeli : {this.state.namaPembeli}</small>
            </div>
            <div className="form-group">
              <label>Keterangan</label>
              <textarea
              className="form-control"
              name="keterangan"
              onChange={this.handleGanti}
              value={this.state.keterangan}
              ></textarea>
              <small>{this.state.keterangan}</small>
            </div>
            <div className="form-group">
              <label>Jenis Pembayaran</label>
              <select
              className="form-select"
              name="jenisPembayaran"
              onChange={this.handleGanti}
              value={this.state.jenisPembayaran}
              >
                <option value="cash">Cash</option>
                <option value="paylater">Paylater</option>
                <option value="kredit">Kredit</option>
              </select>
              <small>Jenis Pembayaran : {this.state.jenisPembayaran}</small>
            </div>
          </form>
        </div>
      </div>
      <h2>Menu Makanan</h2>
      <MenuMakanan 
        namaMenu = {this.state.menuMakanan[0].nama}
        hargaMenu = {this.state.menuMakanan[0].harga}
        stokMenu = {this.state.menuMakanan[0].stock}
      />
      <MenuMakanan 
        namaMenu = {this.state.menuMakanan[1].nama}
        hargaMenu = {this.state.menuMakanan[1].harga}
        stokMenu = {this.state.menuMakanan[1].stock}
      />
      <h2>Menu Minuman</h2>
      { this.state.menuMinuman.map((menu) => 
        <MenuMinuman key = {menu.id} namaMenu = {menu.nama} hargaMenu = {menu.harga}
      />)}
    </div>
    )
  }
}

export default App;
