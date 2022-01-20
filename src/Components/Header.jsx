import React from 'react';
import { Link } from 'react-router-dom';


export default function Header(props) {

    const {countCartItems} = props;

    const handleShowCart =() =>{
        
    }


    return (
    <>

            <header className="header-top row-menu fixed-top">
                <div className="navMenuTitle">
                <Link to="/">
                        <h1>Restaurante TopMeals</h1>
                </Link>
                </div>
                <div className="navMenuCart d-flex align-items-right">   
                            {countCartItems ? (
                                <Link className="show-cart" to="/cart">
                                    <button className='button-cart btn d-flex align-items-center justify-content-around'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                    </svg> 
                                        Produtos: {countCartItems} 
                                    </button> 
                                </Link>                                      
                            ) : (
                                ''    
                            )} 
                        
                        {/*
                        <div className="showCart d-flex align-items-center justify-content-around">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                               <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg> 
                            <Link className="show-cart" to="/cart">Ver carrinho</Link>
                        </div>   
                        */}
                              

                </div>
            </header>
    </>
    )
}
