import React from 'react';

const InfoCard = ({ card }) => {
    const { name, describe, bgColor, icons } = card
    return (
        <div>
            <div className={`card  ${bgColor} shadow-xl p-3 text-white`}>
                <figure>
                    <img src={icons} alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{describe}</p>
                </div>
            </div>
        </div >
    );
};

export default InfoCard;