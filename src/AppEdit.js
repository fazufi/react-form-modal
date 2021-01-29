import React, { Component } from "react";
import Modal from "react-modal";
import "./App.css";

class Modal2 extends Component {
  render() {
    const {modalcuy, tutupmodal, nama, rubah, save} = this.props;
    return (
      <Modal isOpen={modalcuy} onRequestClose={tutupmodal}>
        <button className="xx" onClick={tutupmodal}>x</button>
        <p>replace your name in the following column!!!</p>
        <form>
          <input
            type="text"
            name="nama"
            placeholder="type here"
            defaultValue={nama}
            onChange={rubah}
          />
        </form>
        <button onClick={tutupmodal}>CLOSE</button>
        <button onClick={save}>SAVE</button>
      </Modal>
    );
  }
}






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
    const { nama, modalcuy } = this.state;
    return (
      <div>
        <h1 className="nama">{nama}</h1>
        <button className="ganti" onClick={this.bukamodal}>CHANGE YOUR NAME</button>
        <Modal2
          rubah={this.rubah}
          bukamodal={this.bukamodal}
          save={this.save}
          tutupmodal={this.tutupmodal}
          modalcuy={modalcuy}
          nama={nama}
        />
      </div>
    );
  }
}

