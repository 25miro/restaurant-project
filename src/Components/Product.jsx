import React from 'react';

export default function Product(props) {

  const {cartItems, onAdd} = props;

  return (
      <>
        <div className='container hero-top'>
            <div className="row p-4 pb-0 pe-lg-0 pt-lg -5 align-items-center rounded-3 border shadow-lg">


            {cartItems.map((item) => (
                <div className="col-lg-12 p-4 p-lg-5 pt-lg-3" key={item.id}>
                          <h1 className='display-4 fw-bold lh-1 mb-4'> {item.name}</h1>
                          <div><img className="card-img-top card-item-img-list-big" src={item.image} alt={item.description}/></div>
                          <p className='my-0 fw-normal title-card'>{item.description}</p>
                          <div className="price-label">Preço: {"\u20AC" + item.price}</div>
                          
                      <div className='d-grip gap-2 d-md-flex justify-content-center mb-4 mb-lg-3'>
                          <button className='btn btn-primary btn-lg px-4 me-md-2 fw-bold' onClick={() => onAdd(item)}>Adicionar ao Carrinho</button> 
                      </div>    

                </div>
                ))} 
            </div>
        </div>
      </>
  );
}
