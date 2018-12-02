import React, { Component } from 'react';
import './Card.css';


class Card extends Component {

  render() {
    const {name, src} = this.props;
    return (
      <div class="card bg-dark text-white">
            <img class="card-img-top" src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"/>
            <p class="card-text">{this.props.name}</p>
      </div>
    );
  }
}

export default Card;