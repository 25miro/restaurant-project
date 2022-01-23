import React, { useState } from 'react'
import LoginModal from './LoginModal';
import RegisterModal from './RegisterModal';

export default function Modal() {
    
    const [isLogin, setIsLogin] = useState(true);

    function setLoginForm(){
        setIsLogin(true);
    }

    function setRegisterForm(){
        setIsLogin(false);
    }


    return (
        
        <div>
            {isLogin ? <LoginModal setRegisterForm={setRegisterForm}/> : <RegisterModal setLoginForm={setLoginForm}/> }
        </div>
    )
}
