import React from 'react';
import {useState} from 'react';
import range from 'lodash.range';

function FormLineDateAndGender ({firstDescriptionInput, secondDescriptionInput}) {

	const [day, setDay] = useState('');
	const [month, setMonth] = useState('');
	const [year, setYear] = useState('');

	const months = [
    {value:'01', text:'January'},
    {value:'02', text:'February'},
		{value:'03', text:'March'},
		{value:'04', text:'April'},
		{value:'05', text:'May'},
		{value:'06', text:'June'},
		{value:'07', text:'July'},
		{value:'08', text:'August'},
		{value:'09', text:'September'},
		{value:'10', text:'October'},
		{value:'11', text:'November'},
		{value:'12', text:'December'}
	];

	function handleChangeDays(e) {
		setDay(e.target.value)
	}

	function handleChangeMonths(e) {
		setMonth(e.target.value)
	}

	function handleChangeYears(e) {
		setYear(e.target.value)
	}

    return (
			<div className="FormLine">
				
				<div className="FormLine__info">
					<p className="FormLine__descriptionInput">{firstDescriptionInput}</p>
					<p className="FormLine__descriptionInput">{secondDescriptionInput}</p>
					<div className="FormLine__dateOfBirth">
						
							<select className="FormLine__date FormLine__date_days" name="days" value={day} onChange={handleChangeDays}>
								{range(1, 32).map(item => {
										return (<option key={item} value={item}>{item}</option>);
								})}
							</select>
						
						<select className="FormLine__date FormLine__date_months" name="months" value={month} onChange={handleChangeMonths}>
							{months.map(item => {
								return (<option key={item.value} value={item.value}>{item.text}</option>);
							})}
							</select>

							<select className="FormLine__date FormLine__date_years" name="years" value={year} onChange={handleChangeYears}>
							{range(1950, 2023).map(item => {
									return (<option key={item} value={item}>{item}</option>);
							})}
						</select>
						
					</div>
				</div>
			</div>
    )
}

export default FormLineDateAndGender;