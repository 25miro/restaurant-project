import React from 'react';
import { Link } from 'react-router-dom'

export default function ThanksPage() {


  return (
    <>
        <div className='container hero-top'>
            <div className="row p-4 pb-0 pe-lg-0 pt-lg -5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-12 p-4 p-lg-5 pt-lg-3">
                    <h1 className='fw-bold text-center'>Obrigado pela sua Encomenda!</h1>
                    <p>Em breve receberá um email com os dados do seu pedido.</p>
                    <div className='text-center'>
                        <Link to={"/"} > 
                            <button className='btn btn-primary btn-lg px-4 me-md-2 fw-bold'>Página Principal</button>
                        </Link>
                           
                    </div>
                </div>     
            </div>
        </div>

            
    
    </>
  );
}