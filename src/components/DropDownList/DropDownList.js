import React from 'react';

//компонент выпадающего списка (date, nationality)
function DropDownList({className, nameSelect, value, handleChange, children}) {

	return (
		<select 
			className={className}
			name={nameSelect}
			value={value}
			onChange={handleChange}
		>
			{children}
		</select>
	)
}

export default DropDownList;