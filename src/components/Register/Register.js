import React from 'react';
import FormList from '../FormList/FormList';

function Register ({registration, completeRegistration}) {

    return (
        <div>
					<FormList
						mainTitle = {'Sign up'} 
						title = {completeRegistration ? 'Thank you!' : 'New User?'}
						description={completeRegistration ? 'you registered!' : 'Use the form below to create your account.'}
						onSubmit={handleSubmit}
						buttonText={'Complete Sighnup'}
						registration = {registration}
						completeRegistration={completeRegistration}
					>

					</FormList>
        </div>
    )
}

export default Register;