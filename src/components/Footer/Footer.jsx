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
                        <a href="https://twitter.com/s_calog">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li className="col">
                        <a href="https://www.instagram.com/kobujimesaga/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                    <li className="col">
                        <a href="https://zuisolog.com">
                            <FontAwesomeIcon icon={faWordpressSimple} />
                        </a>
                    </li>
                    <li className="col">
                        <a href="https://www.linkedin.com/in/sakura-nishiya">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </li>
                </ul>
            </footer>

        );
    };
}
export default Footer;

