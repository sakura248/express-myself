import React, { Component } from 'react'
import './favthings.css'

import fukidashi1 from './assets/e0709_3.png'
import fukidashi2 from './assets/e0186_1.png'


class Favthings extends Component {
    render() {
        return  (
            <div className="favWrapper"  id="Favs">
                <div className="fav border-top border-dark">
                    <div className="fukidashi1">
                        <img src={fukidashi1} alt="" />
                    </div>
                    <h2 className="text-center">My Favorites Things!</h2>
                    <div className="fukidashi2">
                        <img src={fukidashi2} alt="" />
                    </div>
                    <p className="text-center">
                        <span>Sitcoms, </span>
                        <span>Brooklyn Nine-Nine, </span>
                        <span>Gina Linetti from Brooklyn Nine-Nine, </span>
                        <span>Modern Family, </span>
                        <span>The Office(US), </span>
                        <span>Friends, </span>
                        <span>Beetlejuice, </span>
                        <span>Coraline, </span>
                        <span>Card Captor Sakura, </span>
                        <span>Penguindrum, </span>
                        <span>Revolutionary Girl Utena, </span>
                        <span>Made In Abyss, </span>
                        <span>Doodle, </span>
                        <span>Mysteries novels, </span>
                        <span>Fantasy novels, </span>
                        <span>Horror novels, </span>
                        <span>Boulet Brother's Dragula, </span>
                        <span>Drag Artists, </span>
                        <span>Travelling, </span>
                        <span>Kobujime, </span>
                        <span>Sake, </span>
                        <span>etc ...</span>
                    </p>
                </div>
            </div>
        );
    };
}
export default Favthings;

