import React from 'react';
import FormList from '../FormList/FormList';

function Register ({}) {

    //Отправляем данные на сервер
    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        //registration( values.name, values.email, values.password );
        //resetForm();
    }

    return (
        <div>
						<FormList
							mainTitle = {'Sign up'} 
							title = {'New User?'}
							description={'Use the form below to create your account.'}
							onSubmit={handleSubmit}
							buttonText={'Complete Sighnup'}
						>

						</FormList>
        </div>
    )
}

export default Register;