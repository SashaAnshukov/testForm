
function FormLine ({
		firstDescriptionInput, secondDescriptionInput, 
		fstInputValue, fstInputPlaceholder, fstHandleChange, fstInputType, fstInputName,
		scndInputValue, scndInputPlaceholder, scndHandleChange, scndInputType, scndInputName, 
	}) {
    
    return (
			<div className="FormLine">
				
				<div className="FormLine__info">
					<p className="FormLine__descriptionInput">{firstDescriptionInput}</p>
					<p className="FormLine__descriptionInput">{secondDescriptionInput}</p>
					<input
						className="FormLine__input"
						value={fstInputValue || ''} 
						placeholder = {fstInputPlaceholder}
						onChange={fstHandleChange}
						type={fstInputType} name ={fstInputName}
						required
					>
					</input>
					
					<input 
						className="FormLine__input"
						value={scndInputValue || ''} 
						placeholder = {scndInputPlaceholder}
						onChange={scndHandleChange}
						type={scndInputType} 
						name ={scndInputName}
						required
					>
					</input>
				</div>

			</div>
    )
}

export default FormLine;