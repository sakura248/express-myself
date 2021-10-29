import React, { Component } from 'react'
import './footer.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'





class Footer extends Component {
    render() {
        return  (
            <footer className="footer container-fluid bg-warning border-top border-dark">
                <ul className="row">
                    <li className="col">
                        <a href="#">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li className="col">
                        <a href="">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li className="col">
                        <a href="">
                            <FontAwesomeIcon icon={faWordpressSimple} />
                        </a>
                    </li>
                    <li className="col">
                        <a href="">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </li>
                </ul>
            </footer>

        );
    };
}
export default Footer;

