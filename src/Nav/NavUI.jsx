import React, { Component } from 'react'
import './nav.css'

class Nav extends Component {
    render() {
        return  (
            <header className="fixed-top container-fluid border-bottom border-dark">
                <div className="row">
                    <div className="logo col-3">
                        <a href="#">
                            Hi :)
                        </a>
                    </div>
                    <nav className="container-fluid col-9">
                        <ul className="nav nav-fill align-items-center">
                            <li className="nav-item border-left border-dark">
                                <a href="#Arts" className="nav-link">
                                    Arts
                                </a>
                            </li>
                            <li className="nav-item border-left border-dark">
                                <a href="#Favs" className="nav-link">
                                    Favs
                                </a>
                            </li>
                            <li className="nav-item border-left border-dark">
                                <a href="https://zuisolog.com" className="nav-link" target="_blank">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    };
}
export default Nav;

