import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart(props) {

    const {cartItems, onAdd, onRemove} = props;
    //
    const itemsPrice = cartItems.reduce((a, c)=> a + c.price * c.qty, 0);
    //
    const shippingPrice = itemsPrice > 50 ? 0 : 10;
    //
    const totalPrice = itemsPrice + shippingPrice;



    return (
        <>

        
        <div className='container hero-top'>
        <div className="row p-4 pb-0 pe-lg-0 pt-lg -5 align-items-center rounded-3 border shadow-lg">
           <h2 className='display-7 fw-bold lh-1 text-center'>Artigos no Carrinho</h2>
                <div className='display-9 text-center'>
                    {/* If cart is empty, show message in a <div> "Carrinho Vazio" */}
                    {cartItems.length === 0 && <div>- Carrinho vazio -</div>}
                </div>
                    {/* Show items in the Cart, with the possibility to add or remove quantity */}
                    {cartItems.map((item) => (
                        <div key={item.id} className='row'>
                           <div className="col-md-9"> 
                            <div><img className="card-item-img" src={item.image} alt={item.description}/></div>
                                <div className="col-md-3">{item.name}</div>
                                {/*<div className="col-md-3">{item.description}</div>*/}
                            </div>
                            <div className="col-md-3"> 
                                    <button onClick={() => onAdd(item)} className='btn btn-primary btn-lg px-4 me-md-2 fw-bold mb-3'> + </button>
                                    <button onClick={() => onRemove(item)} className='btn btn-danger btn-lg px-4 me-md-2 fw-bold mb-3'> - </button>
                                
                              {item.qty} x {"\u20AC" + item.price.toFixed(2)}  
                            </div>
                        </div>
                        
                ))}

                    {cartItems.length !== 0 && (
               <>
                <hr></hr>
                <div className="row">
                    <div className="col-md-9">Valor Artigos</div>
                    <div className='col-md-3 text-right price-margin-cart'>{"\u20AC" + itemsPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-md-9">Valor Entrega <span className="text_shipping">(gratuito em encomendas superiores a 50{"\u20AC"})</span></div>
                    <div className='col-md-3 text-right price-margin-cart'>{"\u20AC" + shippingPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-md-9"><strong>Valor Total a Pagar</strong></div>
                    <div className='col-md-3 text-right price-margin-cart'><strong>{"\u20AC" + totalPrice.toFixed(2)}</strong></div>
                </div>
                <hr />
                <div className="row col-md-12 d-flex justify-content-around">
                    <Link className="row col-md-6 d-flex justify-content-around" to={"/"}>    
                        <button className='btn btn-primary col-md-6 fw-bold mb-3'>
                                Continuar a Comprar
                        </button>
                    </Link>
                    <Link className="row col-md-6 d-flex justify-content-around" to={"/payment"}>
                        <button className='btn btn-primary col-md-6 fw-bold mb-3'>
                                Encomendar e Pagar
                        </button>
                    </Link>
                </div>
               </>

           )}
            </div>
        </div>
        </>
    );
}
