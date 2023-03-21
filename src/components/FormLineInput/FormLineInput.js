import React from 'react';


//компонент input (firstname, lastName, email, password)
function FormLineInput({
	inputClassName, inputPlaceholder, inputType, inputName, inputValue ,handleChange
	 }) {



	return (
		
		<input
			className= {inputClassName}
			placeholder= {inputPlaceholder}
			type= {inputType} 
			name={inputName}
			value={inputValue}
			onChange={handleChange}
		/>
		
	
	)
}

export default FormLineInput;