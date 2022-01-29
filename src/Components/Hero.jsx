import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {


    return (
    <>
        <div className='container hero-top bg-hero'>
            <div className="row p-4 pb-0 pe-lg-0 pt-lg -5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-12 p-4 p-lg-5 pt-lg-3">
                    <h1 className='display-5 text-white fw-bold lh-1 text-hero'> TopMeals - Tudo feito na hora!</h1>
                    <p className='lead text-white text-hero'>Encomende já e receba em sua casa dentro de poucos minutos.</p>
                    <div className='d-grip gap-2 d-md-flex justify-content-center mb-4 mb-lg-3'>
                     <Link to="/contact">   <button className='btn btn-primary btn-lg px-4 me-md-2 fw-bold'>Contacte-nos</button></Link>    
                    </div>    
                </div>
            </div>
        </div>
    </>
    )
}
