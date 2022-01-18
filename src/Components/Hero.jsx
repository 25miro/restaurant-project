import React from 'react'

export default function Hero() {


    return (
        <>
        <div className='container my-5'>
            <div className="row p-4 pb-0 pe-lg-0 pt-lg -5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-12 p-4 p-lg-5 pt-lg-3">
                    <h1 className='display-5 fw-bold lh-1'> TopMeals - Tudo feito na hora!</h1>
                    <p className='lead'>Encomende já e receba em sua casa dentro de poucos minutos.</p>
                <div className='d-grip gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3'>
                    <button className='btn btn-primary btn-lg px-4 me-md-2 fw-bold'>Menus</button> 
                    <button className='btn btn-primary btn-lg px-4 me-md-2 fw-bold'>Contacte-nos</button>    
                </div>    

                </div>
                
            </div>
        </div>
        </>
    )
}
