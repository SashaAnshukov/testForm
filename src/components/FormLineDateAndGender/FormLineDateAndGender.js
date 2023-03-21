import React from 'react';
import {useState} from 'react';
import range from 'lodash.range';
import Radioinput from '../RadioInput/Radioinput';
import DropDownList from '../DropDownList/DropDownList';

function FormLineDateAndGender ({
		day, month, year,
		handleChangeDays, handleChangeMonths, handleChangeYears,
		firstDescriptionInput, secondDescriptionInput, gender, handleChangeGender
	}) {

		const months = [
			{value:'January', text:'January'},
			{value:'February', text:'February'},
			{value:'March', text:'March'},
			{value:'April', text:'April'},
			{value:'May', text:'May'},
			{value:'June', text:'June'},
			{value:'July', text:'July'},
			{value:'August', text:'August'},
			{value:'September', text:'September'},
			{value:'October', text:'October'},
			{value:'November', text:'November'},
			{value:'December', text:'December'}
		];

    return (
			<div className="FormLine">
				
				<div className="FormLine__info">
					<p className="FormLine__descriptionInput">{firstDescriptionInput}</p>
					<p className="FormLine__descriptionInput">{secondDescriptionInput}</p>
					<div className="FormLine__dateOfBirth">
						
						<DropDownList 
							className={"FormLine__date FormLine__date_days"}
							name={"days"} 
							value={day} 
							handleChange={handleChangeDays}
						>
							{range(1, 32).map(item => {
								return (<option key={item} value={item}>{item}</option>);
							})}
						</DropDownList>
					
						<DropDownList
							className={"FormLine__date FormLine__date_months"}
							nameSelect={"months"}
							value={month}
							handleChange={handleChangeMonths}
							>
								{months.map(item => {
									return (<option key={item.value} value={item.value}>{item.text}</option>);
								})}
						</DropDownList>

						<DropDownList
							className={"FormLine__date FormLine__date_years"}
							name={"years"}
							value={year}
							handleChange={handleChangeYears}
						>
							{range(1950, 2023).map(item => {
								return (<option key={item} value={item}>{item}</option>);
							})}
						</DropDownList>
						
					</div>
					
					<Radioinput handleChangeGender={handleChangeGender} gender={gender}/>

				</div>
			</div>
    )
}

export default FormLineDateAndGender;