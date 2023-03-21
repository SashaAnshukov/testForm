import './App.css';
import {useState} from 'react';
import Register from '../Register/Register';
import * as Auth from '../Auth/Auth';
import api from '../Api/Api';

function App() {

	const [completeRegistration, SetCompleteRegistration] = useState(false);

	function registration({firstName, lastName, nationality, email, date, gender, password}) {
    Auth.register(firstName, lastName, nationality, email, date, gender, password)
    .then((response) => {
      console.log (response)
			SetCompleteRegistration(true)
    })
    .catch((err) => {
      console.log (`Ошибка: ${err}`)
    });
  }

	
	api.getUserData().then(res => {
		console.log(res);
	})
	.catch(err => {
			console.log (`Ошибка: ${err}`)
	})
    

  return (
    <div className="App">
			<Register registration = {registration} completeRegistration={completeRegistration}/>
    </div>
  );
}

export default App;
