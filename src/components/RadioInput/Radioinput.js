import React from 'react';
import {useState} from 'react';

function Radioinput({gender, handleChangeGender}) {

	


	return (
		<div className="FormLine__input">
			<input
				className="FormLine__input-radio"
				type="radio"
				name="gender"
				value="male"
				checked={gender === 'male'}
				onChange={handleChangeGender}
				required
			/>
			<label htmlFor="contactChoice1">Male</label>
			
			<input
				className="FormLine__input-radio"
				type="radio"
				name="gender"
				value="female"
				checked={gender === 'female'}
				onChange={handleChangeGender}
				required
			/>
			<label htmlFor="contactChoice2">Female</label>
			
		</div>
	)
}

export default Radioinput;