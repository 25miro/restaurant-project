import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

    const form = useRef();

    //Função de Envio do Email da Encomenda//
  const sendOrder = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4qabztb', 'tpt_contact_resttopmeals', form.current, 'user_Gq7meHgJ4uYCBOSClvxKI')
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
                    <h1 className='fw-bold text-center'>Exponha as suas dúvidas</h1>
                    <p className='lead'>Responderemos assim que possível</p>

                    <form ref={form} onSubmit={sendOrder}>
                        <div className="form-row d-flex justify-content-between col-md-12 mb-3">
                            <div className="form-group col-md-5">
                                <label htmlFor="inputName">Nome:</label>
                                <input type="text" className="form-control" id="inputEmail4" name="name" placeholder="Nome:" required="required" />
                            </div>
                            <div className="form-group col-md-5">
                                <label htmlFor="inputSurname">Sobrenome:</label>
                                <input type="text" className="form-control" id="inputPassword4" name="surname" placeholder="Sobrenome:" required="required"  />
                            </div>
                        </div>

                        <div className="form-row d-flex justify-content-between col-md-12 mb-3">
                            <div className="form-group col-md-5">
                                <label htmlFor="inputEmail">Email:</label>
                                <input type="email" className="form-control" id="inputEmail4" name="email" placeholder="Email:" required="required" />
                            </div>
                            <div className="form-group col-md-5">
                                <label htmlFor="inputCity">Localidade:</label>
                                <input type="text" className="form-control" id="inputCity" name="city" placeholder="Localidade:" />
                            </div>
                        </div>

                        <div className="form-row d-flex justify-content-between col-md-12 mb-3">
                            <div className="form-group col-md-12">
                                <label htmlFor="inputMessage">Mensagem:</label>
                                <textarea className="form-control" rows="5" id="inputMessage" name="message" placeholder="Mensagem" required="required" />
                            </div>

                        </div>

                        <div className='row col-md-12 d-flex justify-content-around'>
                            <input type="submit" className='btn btn-primary col-md-6 fw-bold mb-3' value="Enviar" />
                        </div> 

                    </form>
                </div> 
            </div>
        </div>
    </>
  );
}
