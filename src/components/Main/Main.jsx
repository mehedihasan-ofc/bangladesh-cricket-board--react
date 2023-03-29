import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Player from '../Player/Player';
import Swal from 'sweetalert2';
import './Main.css';

const Main = () => {

    const [players, setPlayers] = useState([]);
    const [cart, setCart] = useState([]);

    useState(() => {

        fetch("players.json")
            .then(res => res.json())
            .then(data => setPlayers(data));

    }, []);

    const handleAddToPlayer = (player) => {

        let newCart = [];

        const exists = cart.find(cartPlayer => cartPlayer.id === player.id);
        if (!exists) {
            newCart = [...cart, player];
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Player Already Selected!',
            });
            return;
        }

        if (newCart.length > 5) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '5 Players Already Selected!',
            });
        }
        else {
            setCart(newCart);
        }
    }

    return (
        <main className='container'>
            <section className='main-contain'>
                <div className='players-container'>
                    {
                        players.map(player => <Player
                            key={player.id}
                            player={player}
                            handleAddToPlayer={handleAddToPlayer}
                        ></Player>)
                    }
                </div>
                <div>
                    <Cart cart={cart}></Cart>
                </div>
            </section>
        </main>
    );
};

export default Main;