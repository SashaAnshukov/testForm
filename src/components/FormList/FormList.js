import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import FormLine from '../FormLine/FormLine';

function Formlist ({mainTitle, title, description, onSubmit, buttonText}) {
    
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	function handleChangeFirstName(e) {
		setFirstName(e.target.value);
	}
	
	function handleChangeLasttName(e) {
		setLastName(e.target.value);
	}	



    return (
			<div className="FormList">
        <div className="FormList__container">
            <h1 className="FormList__mainTitle">
							{mainTitle}
            </h1>
						
						<form className="FormList__form" onSubmit={onSubmit} noValidate>
							<h2 className="Formlist__title">{title}</h2>
							
									<p className="Formlist__description">{description}</p>
									<FormLine
										firstInfoInput={'First Name'} secondInfoInput={'Last Name'}
										firstValue={firstName} firstPlaceholder={'enter a name'}
										firstHandleChange={handleChangeFirstName} 
										firstType={'text'} firstNameOfInput={'firstName'}
										secondValue={lastName} secondPlaceholder={'enter your last name'}
										secondHandleChange={handleChangeLasttName}
										secondType={'text'} secondNameOfInput={'lastName'}
									>
									</FormLine>
									<div className="FormList__auth">
										<p className="Formlist__authInfo">Have an account? 
											<Link className="Formlist__authInfoLink" to='/sign-in'>Login</Link>
										</p>
										<button type ="submit" aria-label="complete"
												className="FormList__button">{buttonText}
										</button>
									</div>
							
						</form>
        </div>
			</div>
    )
}

export default Formlist;