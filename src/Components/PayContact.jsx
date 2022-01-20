import React from 'react'

export default function PayContact() {
    return (
        <>
        <div className='container hero-top'>
            <div className="row p-4 pb-0 pe-lg-0 pt-lg -5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-12 p-4 p-lg-5 pt-lg-3">
                    <h1 className='fw-bold text-center'> Insira os seus dados Pessoais e confirme o pagamento</h1>
                    <p className='lead'>Encomende já e receba em sua casa dentro de poucos minutos.</p>



                     <form>

                            <div className="form-row d-flex justify-content-between col-md-12 mb-3">
                                <div className="form-group col-md-5">
                                    <label for="inputName">Nome:</label>
                                    <input type="text" className="form-control" id="inputEmail4" placeholder="Nome:" />
                                </div>
                                <div className="form-group col-md-5">
                                    <label for="inputSurname">Sobrenome:</label>
                                    <input type="text" className="form-control" id="inputPassword4" placeholder="Sobrenome:" />
                                </div>
                            </div>

                            <div className="form-row d-flex justify-content-between col-md-12 mb-3">
                                <div className="form-group col-md-5">
                                    <label for="inputEmail">Email:</label>
                                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email:" />
                                </div>
                                <div className="form-group col-md-5">
                                    <label for="inputAddress">Morada:</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="Morada:" />
                                </div>
                            </div>

                            <div className="form-row d-flex justify-content-between col-md-12 mb-3">
                                <div className="form-group col-md-4">
                                    <label for="inputCity">Localidade:</label>
                                    <input type="text" className="form-control" id="inputCity" placeholder="Localidade:" />
                                </div>
                                <div className="form-group col-md-4 mb-3">
                                <label for="inputState">Distrito</label>
                                <select id="inputState" className="form-control">
                                    <option selected>Seleccione:</option>
                                    <option>Aveiro</option>
                                    <option>Beja</option>
                                    <option>Braga</option>
                                    <option>Bragança</option>
                                    <option>Castelo Branco</option>
                                    <option>Coimbra</option>
                                    <option>Évora</option>
                                    <option>Faro</option>
                                    <option>Guarda</option>
                                    <option>Leiria</option>
                                    <option>Lisboa</option>
                                    <option>Portalegre</option>
                                    <option>Porto</option>
                                    <option>Santarém</option>
                                    <option>Setúbal</option>
                                    <option>Viana do Castelo</option>
                                    <option>Vila Real</option>
                                    <option>Viseu</option>  
                                </select>
                                </div>
                                <div className="form-group col-md-2 mb-3">
                                    <label for="inputZip">Código-Postal</label>
                                    <input type="text" className="form-control" id="inputZip" />
                                </div>
                            </div>
                            
                            <div className="form-row">
                                <hr />
                                <p className='lead'>Modo de Pagamento</p>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="paypal" />
                                    <label className="form-check-label" for="inlineRadio1">PayPal</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="multibanco" />
                                    <label className="form-check-label" for="inlineRadio2">Multibanco</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="contraentrega" />
                                    <label className="form-check-label" for="inlineRadio3">Contra-Entrega</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="visa" />
                                    <label className="form-check-label" for="inlineRadio4">Visa</label>
                                </div>


                                <hr />
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" for="gridCheck">
                                    Quero receber promoções via email!
                                </label>
                                </div>
                            </div>
                           
                        </form>

                <div className='d-grip gap-2 d-md-flex justify-content-center mb-4 mb-lg-3'>
                    <button type="submit" className='btn btn-primary btn-lg px-4 me-md-2 fw-bold'>Finalizar Encomenda</button>    
                </div>    

                </div>
                
            </div>
        </div>
        </>
    )
}
