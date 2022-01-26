import React from 'react';
import { Link } from 'react-router-dom'

export default function RegisterModal(props) {

    const {setLoginForm} = props;

  return (
    <>
        <div className='container hero-top'>
            <div className="row p-4 pb-0 pe-lg-0 pt-lg -5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-12 p-4 p-lg-5 pt-lg-3">
                    <h1 className='fw-bold text-center'>Crie já a sua conta para encomendar Online</h1>
                    <p className='lead'>Receba em sua casa dentro de poucos minutos a comida fresca.</p>

                    <form >
                        <div className="form-row d-flex justify-content-between col-md-12 mb-3">
                            <div className="form-group col-md-5">
                                <label htmlFor="inputName">Nome:</label>
                                <input type="text" className="form-control" id="inputEmail4" name="name" placeholder="Nome:" />
                            </div>
                            <div className="form-group col-md-5">
                                <label htmlFor="inputSurname">Sobrenome:</label>
                                <input type="text" className="form-control" id="inputPassword4" name="surname" placeholder="Sobrenome:" />
                            </div>
                        </div>

                        <div className="form-row d-flex justify-content-between col-md-12 mb-3">
                            <div className="form-group col-md-5">
                                <label htmlFor="inputEmail">Email:</label>
                                <input type="email" className="form-control" id="inputEmail4" name="email" placeholder="Email:" />
                            </div>
                            <div className="form-group col-md-5">
                                <label htmlFor="inputPassword">Password:</label>
                                <input type="password" className="form-control" id="inputPassword" name="password" placeholder="Password:" />
                            </div>
                        </div>

                        <div className="form-row d-flex justify-content-between col-md-12 mb-3">
                            <div className="form-group col-md-5">
                                <label htmlFor="inputCity">Localidade:</label>
                                <input type="text" className="form-control" id="inputCity" name="city" placeholder="Localidade:" />
                            </div>
                            <div className="form-group col-md-5">
                                <label htmlFor="inputAddress">Morada:</label>
                                <input type="text" className="form-control" id="inputAddress" name="street" placeholder="Morada:" />
                            </div>
                        </div>

                        <div className="form-row d-flex justify-content-between col-md-12 mb-3">    
                            <div className="form-group col-md-5 mb-3">
                            <label htmlFor="inputState">Distrito</label>
                            <select id="inputState" className="form-control" name="district">
                                <option value="0">Seleccione:</option>
                                <option value="Aveiro">Aveiro</option>
                                <option value="Beja">Beja</option>
                                <option value="Braga">Braga</option>
                                <option value="Bragança">Bragança</option>
                                <option value="Castelo Branco">Castelo Branco</option>
                                <option value="Coimbra">Coimbra</option>
                                <option value="Évora">Évora</option>
                                <option value="Faro">Faro</option>
                                <option value="Guarda">Guarda</option>
                                <option value="Leiria">Leiria</option>
                                <option value="Lisboa">Lisboa</option>
                                <option value="Portalegre">Portalegre</option>
                                <option value="Porto">Porto</option>
                                <option value="Santarém">Santarém</option>
                                <option value="Setúbal">Setúbal</option>
                                <option value="Viana do Castelo">Viana do Castelo</option>
                                <option value="Vila Real">Vila Real</option>
                                <option value="Viseu">Viseu</option>  
                            </select>
                            </div>
                            <div className="form-group col-md-5 mb-3">
                                <label htmlFor="inputZip">Código-Postal</label>
                                <input type="text" className="form-control" name="zipcode" id="inputZip" />
                            </div>
                        </div>

                        <div className='text-center'>
                            <button className='btn btn-primary btn-lg px-4 me-md-2 fw-bold'>Registar</button>
                            <Link to="" onClick={setLoginForm}>Já tenho Conta</Link>
                        </div>

                    </form>
                </div> 
            </div>
        </div>
    </>
  );
}
