import React from 'react';

export default function Header(props) {

    const {countCartItems} = props;


    return (
        <>
        <header className="row-menu block center">
            <div className="navMenuTitle">
                <a href="#/">
                    <h1>Restaurante TopMeals</h1>
                </a>
            </div>
            <div className="navMenuCart">
                <a href="#/cart">
                <img src={`./images/logo-cart.png`} alt='{logo cart}' />
                {''}
                        {countCartItems ? (
                            <button className="badge">{countCartItems}</button>
                        ) : (
                            ''
                        )} 
                    
                    <br/>
                    ver carrinho
                </a>

            </div>
        </header>
    </>
    )
}
