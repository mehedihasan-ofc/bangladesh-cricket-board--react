import React from 'react';
import './Player.css';

const Player = (props) => {

    const { img, name, position, price, ratings } = props.player;
    const handleAddToPlayer = props.handleAddToPlayer;

    return (
        <div className='player-card'>
            <img src={img} alt="" />
            <div className='player-info'>
                <h3>{name}</h3>
                <p>{position}</p>
                <p>price: ${price}</p>
                <p>Rating: {ratings} star</p>
            </div>

            <button onClick={() => handleAddToPlayer(props.player)} className='btn-add-player'>Add Player</button>
        </div>
    );
};

export default Player;