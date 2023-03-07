import React from 'react';
import {Link} from 'react-router-dom';

function Formlist ({mainTitle, title, description, onSubmit, buttonText}) {
    
    return (
			<div className="FormList">
        <div className="FormList__container">
            <h1 className="FormList__mainTitle">
							{mainTitle}
            </h1>
						
						<div className="FormList__form">
							<h2 className="Formlist__title">{title}</h2>
							<form onSubmit={onSubmit} noValidate>
									<p className="Formlist__description">{description}</p>

									<div className="FormList__auth">
										<p className="Formlist__authInfo">Have an account? 
											<Link className="Formlist__authInfoLink" to='/sign-in'>Login</Link>
										</p>
										<button type ="submit" aria-label="complete"
												className="FormList__button">{buttonText}
										</button>
									</div>
							</form>
						</div>
        </div>
			</div>
    )
}

export default Formlist;