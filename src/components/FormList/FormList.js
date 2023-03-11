import React from 'react'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import FormLine from '../FormLine/FormLine';
import FormLineDateAndGender from '../FormLineDateAndGender/FormLineDateAndGender'


function Formlist ({mainTitle, title, description, onSubmit, buttonText}) {
    
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [nationality, setNationality] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cofirmPassword, setCofirmPassword] = useState('');
	
	

	function handleChangeFirstName(e) {
		setFirstName(e.target.value);
	}
	
	function handleChangeLastName(e) {
		setLastName(e.target.value);
	}	

	function handleChangeNationality(e) {
		setNationality(e.target.value);
	}	

	function handleChangeEmail(e) {
		setEmail(e.target.value);
	}	

	function handleChangePassword(e) {
		setPassword(e.target.value);
	}	

	function handleChangeConfirmPassword(e) {
		setCofirmPassword(e.target.value);
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
										firstDescriptionInput={'First Name'} secondDescriptionInput={'Last Name'}

										fstInputValue={firstName} fstInputPlaceholder={"Enter a name"}
										fstHandleChange={handleChangeFirstName} 
										fstInputType={'text'} fstInputName={'firstName'}

										scndInputValue={lastName} scndInputPlaceholder={'Enter your last name'}
										scndHandleChange={handleChangeLastName}
										scndInputType={'text'} scndInputName={'lastName'}
									>
									</FormLine>
									<FormLine
										firstDescriptionInput={'Nationality'} secondDescriptionInput={'E-mail'}

										fstInputValue={nationality} fstInputPlaceholder={'Enter a nationality'}
										fstHandleChange={handleChangeNationality} 
										fstInputType={'text'} fstInputName={'nationality'}

										scndInputValue={email} scndInputPlaceholder={'Enter your e-mail'}
										scndHandleChange={handleChangeEmail}
										scndInputType={'text'} scndInputName={'E-mail'}
									>
									</FormLine>
									
									<FormLineDateAndGender
										firstDescriptionInput={'Date of Birth'} secondDescriptionInput={'Gender'}	
									>
									</FormLineDateAndGender>

									<FormLine
										firstDescriptionInput={'Password'} secondDescriptionInput={'Confirm Password'}

										fstInputValue={password} fstInputPlaceholder={'Enter your password'}
										fstHandleChange={handleChangePassword} 
										fstInputType={'password'} fstInputName={'password'}

										scndInputValue={cofirmPassword} scndInputPlaceholder={'Cofirm password'}
										scndHandleChange={handleChangeConfirmPassword}
										scndInputType={'password'} scndInputName={'cofirm password'}
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