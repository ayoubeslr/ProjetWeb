import React, { Component } from 'react';
import './Board.css';
import Card from


class Board extends Component {
  render() {
    fetch('Champions.json').then((response) => {
      response = response.json()
      response.then((result) => {
        console.log(result)
      })
    })
    // eslint-disable-next-line no-undef
    return (
      <section class="card-columns ">
        <cards></cards>

      </section>
    );
  }
}


export default Board;