
function FormLine ({firstDescriptionInput, secondDescriptionInput, children}) {

	return (
		<div className="FormLine">
			
			<div className="FormLine__info">
				<p className="FormLine__descriptionInput">{firstDescriptionInput}</p>
				<p className="FormLine__descriptionInput">{secondDescriptionInput}</p>
				{children}
			</div>

		</div>
	)
}

export default FormLine;