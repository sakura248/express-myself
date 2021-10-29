import React, { Component } from 'react'
import Card from './CardUI'

import img1 from '../assets/25C7117A-9770-4932-B60F-15C7D489EC5A.JPG'
import img2 from '../assets/871A6926-D800-4041-8230-7E82A5EB2B09.JPG'
import img3 from '../assets/IMG_7280.PNG'
import img4 from '../assets/IMG_7421.PNG'
import img5 from '../assets/IMG_7249.png'
import img6 from '../assets/IMG_8058.JPG'
import img7 from '../assets/IMG_7152.PNG'
import img8 from '../assets/IMG_7649.PNG'
import img9 from '../assets/IMG_6778.PNG'
import img10 from '../assets/IMG_7283.PNG'
import img11 from '../assets/Illustration5.PNG'
import img12 from '../assets/IMG_7696.PNG'



class Cards extends Component {
    
    render() { 
        return ( 
            <div>
                <div className="text-banner bg-warning border-bottom border-dark" id="Arts">
                    <div className="text-banner__content">
                        <p>My favorite drag artists! : Yvie Oddly, Abhora, Dahli, Hoso Terra Toma, Bimini Bon Boulash, Tayce, Crystal, Awhora, Shea Coulee, Pythia</p>
                    </div>
                </div>
                <div className="container-fluid">
                    <p className="text-center artIntro">Check My Arts!</p>
                    <div className="d-flex justify-content-center flex-wrap">
                        <div className="">
                            <Card imgsrc={img1} title="Aja" text="Welcome to Tokyo @ajathekween 🗼❣️ #fancyhimtokyo #fancyhim #wasabitchcream"/>
                        </div>
                        <div className="">
                            <Card imgsrc={img2} title="Yvir Oddly" text="#yvieoddly #teamyvie #yvieoddlyfanart #rupaulsdragrace #dragrace"/>
                        </div>
                        <div className="">
                            <Card imgsrc={img3} title="Crystal Methyd" text="#rupaulsdragrace #rupaulsdragraceseason12 #rpdr #rpdrseason12 "/>
                        </div>
                        <div className="">
                            <Card imgsrc={img4} title="Shea Coulee" text="#teamshea #teamsheacoulee #sheacoulee #rupaulsdragrace #rupaulsdragraceallstars5 "/>
                        </div>
                        <div className="">
                            <Card imgsrc={img5} title="Yvie Oddly" text="#yvieoddly #teamyvie #teamyvieoddly #dragqueen #dragqueens #rupauldragrace "/>
                        </div>
                        <div className="">
                            <Card imgsrc={img6} title="Gigi Goode" text="#gigigoode #rupaulsdragrace #rupaulsdragraceseason12 #dragracefanart "/>
                        </div>
                        <div className="">
                            <Card imgsrc={img7} title="Farrah Moan" text="#dragqueen #farrahmoan #dragfanart #dragqueenfanart #fanart"/>
                        </div>
                        <div className="">
                            <Card imgsrc={img8} title="Shea Coulee" text="#dragqueen #dragqueenfanart #dragfanart #sheacoulee #fanart #dragdrawing"/>
                        </div>
                        <div className="">
                            <Card imgsrc={img9} title="Yvie Oddly" text="My first fanart for @oddlyyvie 🧡💛 #teamyvie #yvieoddly #dragfanart"/>
                        </div>
                        <div className="">
                            <Card imgsrc={img10} title="Yvie Oddly" text="#teamYvie #yvieoddly #oddart #oddbless #dragqueen #dragrace #rupaulsdragrace "/>
                        </div>
                        <div className="">
                            <Card imgsrc={img11} title="Naomi Smalls" text="#naomismalls #dragqueen #rupaulsdragrace #dragracelive #dragracevegas "/>
                        </div>
                        <div className="">
                            <Card imgsrc={img12} title="Rajah O'hara & Pandora Boxx" text="#rupaulsdragrace #dragrace #dragraceallstars"/>
                        </div>
                        
                        
                    </div>
                </div>
                <div className="text-center">
                    <button className="instaBtn">
                            <a href="https://www.instagram.com/kobujimesaga/" target="_blank "className="">
                                Go to Insta
                            </a>
                    </button>
                </div>
            </div>

        );
    }
}

export default Cards;