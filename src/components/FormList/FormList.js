import React from 'react'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import FormLine from '../FormLine/FormLine';
import FormLineInput from '../FormLineInput/FormLineInput';
import DropDownList from '../DropDownList/DropDownList';
import FormLineDateAndGender from '../FormLineDateAndGender/FormLineDateAndGender'


function Formlist ({completeRegistration, mainTitle, title, description, registration, buttonText}) {

	const { register, handleSubmit, formState: { isSubmitted, errors } } = useForm({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
		}
	});  

	const [nationality, setNationality] = useState('');
	const [password, setPassword] = useState('');
	const [checkPassword, setCheckPassword] = useState(false);
	const [cofirmPassword, setCofirmPassword] = useState('');
	const [inputError, setInputError] = useState('passwords dont match');
	const [inputActive, setInputActive] = useState(false);

	

	const [day, setDay] = useState('');
	const [month, setMonth] = useState('');
	const [year, setYear] = useState('');
	const [gender, setGender] = useState('');

	const nationalitys = [
		{value:'', text:'-Select-'},
    {value:'Argentina', text:'Argentina'},
    {value:'Canada', text:'Canada'},
		{value:'Belarus', text:'Belarus'}
	];
	
	function handleChangeNationality(e) {
		setNationality(e.target.value);
	}	

	function handleChangeConfirmPassword(e) {
		setCofirmPassword(e.target.value);
		setInputActive(true)
	}	

	function handleChangeDays(e) {
		setDay(e.target.value)
	}

	function handleChangeMonths(e) {
		setMonth(e.target.value)
	}

	function handleChangeYears(e) {
		setYear(e.target.value)
	}

	function handleChangeGender(e) {
		setGender(e.target.value)
	}

	function handleChangePassword(e) {
		//checkPassword ? setPassword(e.target.value) : console.log('not cofirmed password')
		setPassword(e.target.value)
	}	

	function handleChangeConfirmPassword(e) {
		setCofirmPassword(e.target.value);
		setInputActive(true)
	}	
	
	//Отправляем данные на сервер
	//const onSubmit = data => console.log(data);
	function onSubmit(data) {
    // Запрещаем браузеру переходить по адресу формы
    
    // Передаём значения управляемых компонентов во внешний обработчик
    const datastartPage = {};
		const date = {day, month, year}
    datastartPage.firstName = data.firstName;
    datastartPage.lastName = data.lastName;
		datastartPage.nationality = nationality;
		datastartPage.email = data.email;
		datastartPage.date = date;
		datastartPage.gender = gender;
		datastartPage.password = data.password;
		console.log(datastartPage)
		setInputActive(true)
		registration(datastartPage);
  }

	

    return (
			<div className="FormList">
				
        <div className={completeRegistration ? "FormList__container-registered" : "FormList__container"}>
            <h1 className="FormList__mainTitle">
							{mainTitle}
            </h1>
				{completeRegistration 
					? 
					<div className={"FormList__form"}>
							<h2 className="Formlist__title Formlist__title_registered">{title}</h2>
							<p className="Formlist__title Formlist__description_registered">{description}</p>
					</div> 
					:	
					<form className={"FormList__form"} onSubmit={handleSubmit(onSubmit)} noValidate>
						<h2 className="Formlist__title">{title}</h2>
						
							<p className="Formlist__description">{description}</p>
							<FormLine firstDescriptionInput={'First Name'} secondDescriptionInput={'Last Name'}>
								<input
									className= {`FormLine__input ${errors.firstName ? 'Formline__input_error' : ''}`}
									placeholder= {'Enter a name'}
									type= {'text'} 
									name={'firstName'}
									{...register("firstName", {
										required: "Required"
									})}
								/>
									

								<input
										className= {`FormLine__input ${errors.lastName ? 'Formline__input_error' : ''}`}
										placeholder= {'Enter a last name'}
										type= {'text'} 
										name={'lastName'}
										{...register("lastName", {
											required: "Required"
										})}
								/>
								<span className="FormList__span">{errors.firstName && <>{errors.firstName.message}</>}</span>
								<span className="FormList__span">{errors.lastName && <>{errors.lastName.message}</>}</span>
								</FormLine>

								<FormLine firstDescriptionInput={'Nationality'} secondDescriptionInput={'E-mail'}>
									<DropDownList
										className={"FormLine__nationality"}
										nameSelect={"nationality"}
										value={nationality}
										handleChange={handleChangeNationality}
										>
											{nationalitys.map(item => {
												return (<option key={item.value} value={item.value}>{item.text}</option>);
											})}
									</DropDownList>
									
									<input
										className= {`FormLine__input 
										${ 
											(isSubmitted ? 'Formline__input_error' : '')
											?
											(errors.email ? 'Formline__input_error' : 'FormLine__input_accepted')
											:
											('')
										}`}
										placeholder= {'Enter your e-mail'}
										type= {'email'} 
										name={'email'}
										{...register("email", {
											required: "Required",
											pattern: {
												value: /\S+@\S+\.\S+/,
												message: "Email is not valid."
											}
										})}
									/>
									
									<span></span>
									<span className="FormList__span">{errors.email && <>{errors.email.message}</>}</span>
								</FormLine>
								
								<FormLineDateAndGender
									firstDescriptionInput={'Date of Birth'} secondDescriptionInput={'Gender'}
									handleChangeMonths={handleChangeMonths}
									handleChangeDays={handleChangeDays}
									handleChangeYears={handleChangeYears}
									gender={gender} handleChangeGender={handleChangeGender}
								>
								</FormLineDateAndGender>

								<FormLine firstDescriptionInput={'Password'} secondDescriptionInput={'Confirm Password'}>
									<FormLineInput
										inputClassName={"FormLine__input"}
										inputValue={password} 
										inputPlaceholder = {"Enter your password"}
										handleChange={handleChangePassword}
										inputType={'password'}
										
									/>
									<FormLineInput
										inputClassName={"FormLine__input"}
										inputValue={cofirmPassword} 
										inputPlaceholder = {"Confirm password"}
										handleChange={handleChangeConfirmPassword}
										inputType={'password'}
										
									/>
									<span></span>
									<span className="FormList__span"> {
										inputActive && cofirmPassword !== password ? inputError : ''
										}
									</span>
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
				}
        </div>
			</div>
    )
}

export default Formlist;