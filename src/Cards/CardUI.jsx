import React from 'react';

import './card-style.css'

const Card = props => {
    return (
        <div className="card tex-center border border-dark rounded-0">
            <div className="overflow">
                <img src={props.imgsrc} alt="img1" class="card-img-top border-bottom border-dark" />
            </div>
            <div className="card-body " >
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text text-secondary">
                    {props.text} 
                </p>
            </div>
        </div>
    );

}

export default Card;