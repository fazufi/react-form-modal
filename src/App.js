import React, { Component } from "react";
import "./App.css";
import Modal from "react-modal";

export default class App extends Component {
  state = {
    modalcuy: false,
    nama: "FAZUFI",
    isi: "",
  };

  bukamodal = () => {
    this.setState({ modalcuy: true });
  };

  tutupmodal = () => {
    this.setState({ modalcuy: false });
  };

  rubah = (e) => {
    this.setState({ isi: e.target.value });
  };

  save = () => {
    this.setState({ nama: this.state.isi });
    this.setState({ modalcuy: false });
  };

  render() {
    const { modalcuy, nama } = this.state;
    return (
      <div>
        <h1 className="nama">{nama}</h1>
        <button onClick={this.bukamodal}>KETUK UNTUK GANTI NAMA</button>

        <Modal isOpen={modalcuy} onRequestClose={this.tutupmodal}>
          <p className="gantinamamu">GANTI NAMAMU di kolom ini:</p>
          <form>
            <input
              className="input"
              type="text"
              name="nama"
              placeholder="ketik di sini"
              onChange={this.rubah}
            />
          </form>
          <button onClick={this.tutupmodal}>TUTUP</button>
          <button onClick={this.save}>SAVE</button>
        </Modal>
      </div>
    );
  }
}
