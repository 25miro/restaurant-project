import React from 'react'

export default function Cart(props) {

    const {cartItems, onAdd, onRemove} = props;
    //
    const itemsPrice = cartItems.reduce((a, c)=> a + c.price * c.qty, 0);
    //
    const shippingPrice = itemsPrice > 100 ? 0 : 50;
    //
    const totalPrice = itemsPrice + shippingPrice;



    return (
        <aside className="block col-1">
           <h2>Artigos no Carrinho</h2>
           <div>
               {/* If cart is empty, show message in a <div> "Carrinho Vazio" */}
               {cartItems.length === 0 && <div> Carrinho vazio</div>}
           </div>
           {/* Show items in the Cart, with the possibility to add or remove quantity */}
           {cartItems.map((item) => (
               <div key={item.id} className='row'>
                   <div className="col-2">{item.name}</div>
                   <div className="col-2">
                       <button onClick={() => onAdd(item)} className='add'> + </button>
                       <button onClick={() => onRemove(item)} className='remove'> - </button>
                   </div>
                   <div className="col-2 text-right">
                        {item.qty} x {"\u20AC" + item.price.toFixed(2)}
                   </div>

               </div>
               
           ))}

           {cartItems.length !== 0 && (
               <>
                <hr></hr>
                <div className="row">
                    <div className="col-2">Valor Artigos</div>
                    <div className='col-1 text-right'>{"\u20AC" + itemsPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2">Valor Entrega <br/> <span className="text_shipping">(gratuito em encomendas superiores a 100)</span></div>
                    <div className='col-1 text-right'>{"\u20AC" + shippingPrice.toFixed(2)}</div>
                </div>
                <div className="row">
                    <div className="col-2"><strong>Valor Total a Pagar</strong></div>
                    <div className='col-1 text-right'><strong>{"\u20AC" + totalPrice.toFixed(2)}</strong></div>
                </div>
                <hr />
                <div className="row">
                    <button onClick={() => alert('Abre Formulário para colocar os dados')}>
                        Encomendar e Pagar
                    </button>
                </div>
               </>

           )}

        </aside>
    );
}
