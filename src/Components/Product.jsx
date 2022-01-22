import React from 'react';
import { useParams } from 'react-router-dom';


export default function Product(props) {


  const {products, onAdd} = props;

  const {id} = useParams();



  return (
      <>
        <div className='container hero-top'>
            <div className="row p-4 pb-0 pe-lg-0 pt-lg -5 align-items-center rounded-3 border shadow-lg">


            {
                <div className="col-lg-12 p-4 p-lg-5 pt-lg-3">
                          <h1 className='display-4 fw-bold lh-1 mb-4'> {products[id].name}</h1>

                      <div className="col-lg-12 d-flex justify-content-between mb-5">   
                        <div className="col-lg-6 ">       
                            <div><img className="card-img-top card-item-img-list-big" src={products[id].image} alt={products[id].description}/></div>
                        </div>
                        <div className="col-lg-6 ">   
                            <p className='fw-bold p-lg-9'>Descrição:</p>
                            <p className='fw-normal p-1 p-lg-9'>{products[id].description}</p>
                            <div className="price-label text-center">Extras possíveis: {products[id].extras}</div>

                            <div className="price-label text-center">Preço: {"\u20AC" + products[id].price}</div>
                        </div>
                        
                      </div> 
                      
                         

                      <div className='d-grip gap-2 d-md-flex justify-content-center mb-4 mb-lg-3'>
                          <button className='btn btn-primary btn-lg px-4 me-md-2 fw-bold' onClick={() => onAdd(products[id])}>Adicionar ao Carrinho</button> 
                      </div>    

                </div>
            } 

            </div>
        </div>
      </>
  );
}
