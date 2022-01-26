import React from 'react';
import { Link } from 'react-router-dom'

export default function LoginModal(props) {

    const {setRegisterForm} = props; //Recebe props para poder mudar o estado do formulário, activo para entrar ou desactivo para registar.

  return (
    <>
        <div className='container hero-top'>
            <div className="row p-4 pb-0 pe-lg-0 pt-lg -5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-12 p-4 p-lg-5 pt-lg-3">
                    <h1 className='fw-bold text-center'>Já a pensar no que vai comer?</h1>
                    <p>Entre e veja os menús que temos preparados!</p>
                    <form >
                        <div className="form-row d-flex justify-content-between col-md-12 mb-3">
                            <div className="form-group col-md-5">
                                <label htmlFor="inputName">Email:</label>
                                <input type="text" className="form-control" id="inputEmail4" name="name" placeholder="Nome:" />
                            </div>
                            <div className="form-group col-md-5">
                                <label htmlFor="inputSurname">Password:</label>
                                <input type="text" className="form-control" id="inputPassword4" name="surname" placeholder="Sobrenome:" />
                            </div>
                        </div>
                        <div className='text-center'>
                            <button className='btn btn-primary btn-lg px-4 me-md-2 fw-bold'>ENTRAR</button>
                            <Link to="" onClick={setRegisterForm}>Criar Conta</Link>
                        </div>
                    </form>
                </div>     
            </div>
        </div>

            
    
    </>
  );
}

