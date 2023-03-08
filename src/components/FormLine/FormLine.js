
function FormLine ({
		firstInfoInput, secondInfoInput, 
		firstValue, firstPlaceholder, firstHandleChange, firstType, firstNameOfInput,
		secondValue, secondPlaceholder, secondHandleChange, secondType, secondNameOfInput, 
	}) {
    
    return (
			<div className="FormLine">
				<div>
					<p className="FormLine__firstName">{firstInfoInput}</p>
					<p className="FormLine__secondtName">{secondInfoInput}</p>
				</div>

				<div>
					<input
						className="FormLine__firstInput"
						value={firstValue || ''} 
						placeholder = {firstPlaceholder}
						onChange={firstHandleChange}
						type={firstType} name ={firstNameOfInput}
						required
					>
					</input>

					<input 
						className="FormLine__secondtInput"
						value={secondValue || ''} 
						placeholder = {secondPlaceholder}
						onChange={secondHandleChange}
						type={secondType} 
						name ={secondNameOfInput}
						required
					>
					</input>
				</div>

			</div>
    )
}

export default FormLine;