import React from 'react';
import { Link } from 'react-router-dom';


export default function Header(props) {

    const {countCartItems} = props;

    return (
    <>
            <header className="header-top row-menu fixed-top">
                <div className="navMenuTitle">
                    <Link to="/">
                        <h1>Top Meals</h1>
                    </Link>
                </div>

                <div className="navManuCart ">
                    <form className="form-inline d-flex p-3 ">
                            <input className="form-control" type="search" placeholder="Pesquisar" />
                            <button className="btn btn-secondary" type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                </svg>
                            </button>
                    </form>
                </div>

                <div className="navMenuCart">   
                  {
                    //countCartItems ? -  Activar se for necessário colocar carrinho a aparecer apenas se hover artigos encomendados, ou seja, fica desactivado se tiver vazio
                        (
                    <Link className="showcart" to="/cart">
                        <button className='button-cart btn d-flex align-items-center justify-content-around'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg> 
                            Carrinho: {countCartItems} {/* Mostra o número de artigos encomendados, não mostra quantidades totais*/}
                        </button> 
                    </Link>                                      
                    ) 
                    // : ('')
                  } 
                    <div className="showcart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>
                        <Link className="showcart" to="/login">Login</Link>
                    </div>   
                </div>
            </header>
    </>
    )
}
