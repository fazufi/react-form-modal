import React, { Component } from "react";
import Modal from "react-modal";
import "./App.css";


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
        <button className="ganti" onClick={this.bukamodal}>CHANGE YOUR NAME</button>

        <Modal isOpen={modalcuy} onRequestClose={this.tutupmodal}>
          <p className="gantinamamu">REPLACE in the following column:</p>
          <form>
            <input
              className="input"
              type="text"
              name="nama"
              placeholder="type here"
              onChange={this.rubah}
            />
          </form>
          <button onClick={this.tutupmodal}>CLOSE</button>
          <button onClick={this.save}>SAVE</button>
        </Modal>
      </div>
    );
  }
}
