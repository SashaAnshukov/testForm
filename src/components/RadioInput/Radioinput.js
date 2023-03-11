import React from 'react';

function Radioinput () {

    return (
			<div className="FormLine__input">
				<input className="FormLine__input-radio" type="radio" name="gender" value="male"/>
				<label htmlFor="contactChoice1">Male</label>
				
				<input className="FormLine__input-radio"type="radio" name="gender" value="female"/>
				<label htmlFor="contactChoice2">Female</label>
				
			</div>
    )
}

export default Radioinput;