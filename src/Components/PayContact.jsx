import { Link } from 'react-router-dom';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function PayContact(props) {

  const {cartItems, onAdd, onRemove} = props;
  const form = useRef();

  const sendOrder = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4qabztb', 'template_resttopmeals', form.current, 'user_Gq7meHgJ4uYCBOSClvxKI')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); 
  };

    return (
        <>
        <div className='container hero-top'>
            <div className="row p-4 pb-0 pe-lg-0 pt-lg -5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-12 p-4 p-lg-5 pt-lg-3">
                    <h1 className='fw-bold text-center'>Insira os seus dados Pessoais e confirme o pagamento</h1>
                    <p className='lead'>Encomende já e receba em sua casa dentro de poucos minutos.</p>

                     <form ref={form} onSubmit={sendOrder}>
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
                                    <label htmlFor="inputAddress">Morada:</label>
                                    <input type="text" className="form-control" id="inputAddress" name="street" placeholder="Morada:" />
                                </div>
                            </div>

                            <div className="form-row d-flex justify-content-between col-md-12 mb-3">
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputCity">Localidade:</label>
                                    <input type="text" className="form-control" id="inputCity" name="city" placeholder="Localidade:" />
                                </div>
                                <div className="form-group col-md-4 mb-3">
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
                                <div className="form-group col-md-2 mb-3">
                                    <label htmlFor="inputZip">Código-Postal</label>
                                    <input type="text" className="form-control" name="zipcode" id="inputZip" />
                                </div>
                            </div>
                            
                            <div className="form-row text-center">
                                <hr />
                                <p className='lead'>Modo de Pagamento</p>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="paypal" />
                                    <label className="form-check-label" htmlFor="inlineRadio1">PayPal</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="multibanco" />
                                    <label className="form-check-label" htmlFor="inlineRadio2">Multibanco</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="contraentrega" />
                                    <label className="form-check-label" htmlFor="inlineRadio3">Contra-Entrega</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" value="visa" />
                                    <label className="form-check-label" htmlFor="inlineRadio4">Visa</label>
                                </div>

                                <hr />
                            </div>

                        <fieldset id="cartitems" name="cartitems">
                            <legend><h4 className='fw-bold text-center'> Resumo da sua Encomenda</h4></legend>
                            
                                {cartItems.map((item) => (
                                    <div key={item.id} className='row mb-1'>
                                        <div className="col-md-9"> 
                                            <div><img className="card-item-img" src={item.image} alt={item.description}/></div>
                                            {/*<div className="col-md-6">{item.name}</div>*/}
                                            <input className="inputwithoutborder" type="text" name="itemname" value={item.name}/>
                                            {/*<div className="col-md-3">{item.description}</div>*/}
                                        </div>
                                        {/*<div className="col-md-3"> {item.qty} x {"\u20AC" + item.price.toFixed(2)} </div>*/}
                                        <input className="inputwithoutborder col-md-3" type="text" name="itemprice" value={item.qty + "x \u20AC" + item.price.toFixed(2)}/>
                                    </div>
                        
                        ))}
                        </fieldset>

                            <div className="form-group mb-3">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck"  name="check-promos" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    Quero receber promoções via email!
                                </label>
                                </div>
                            </div>

                            <div className='row col-md-12 d-flex justify-content-around'>
                                <input type="submit" className='btn btn-primary col-md-6 fw-bold mb-3' value="Finalizar Encomenda" />
                            </div>   


                            <div className="row col-md-12 d-flex justify-content-around">
                                <Link className="row col-md-6 d-flex justify-content-around" to={"/"}>    
                                    <button className='btn btn-primary col-md-6 fw-bold mb-3'>
                                            Continuar a Comprar
                                    </button>
                                </Link>

                            </div>
                           
                        </form>

                

                </div>
                
            </div>
        </div>
        </>
    )
}
