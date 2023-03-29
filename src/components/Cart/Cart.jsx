import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

    // calculate total cost
    let totalCost = 0;
    for(const player of cart) {
        totalCost = totalCost + player.price;
    }

    return (
        <div className='cart'>
            <h4>Selected - 5</h4>
            <hr />
            <div className='added-player'>
                {
                    cart.map(player => {
                        return (
                            <div key={player.id} className='cart-player-info'>
                                <img src={player.img} alt="" />
                                <h6>{player.name}</h6>
                                <p>${player.price}</p>
                            </div>
                        )
                    })
                }
            </div>
            <hr />

            <h5>Selected Players: {cart.length}</h5>
            <p>Total Cost: ${totalCost}</p>
        </div>
    );
};

// function addedPlayer() {
//     return (
//         <>
//             <div>
//                 <h6>Name: </h6>
//                 <p>Price: </p>
//             </div>
//         </>
//     )
// }

export default Cart;