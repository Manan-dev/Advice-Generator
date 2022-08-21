import './App.css';
import React, { useState, useEffect } from 'react';
import { FaDiceFive } from 'react-icons/fa';

function App() {
	const [advice, setAdvice] = useState('');

	const getAdvice = async () => {
		try {
			const response = await fetch('https://api.adviceslip.com/advice');
			const data = await response.json();
			setAdvice(data.slip);
		} catch (err) {
			console.log(err.message);
		}
	};

	return (
		<div className="App">
			<div className="container">
				<div className="heading">
					<p>Advice #{advice ? advice.id : 1}</p>
				</div>
				<div className="advice">
					"
					{advice
						? advice.advice
						: "It is easy to sit up and take notice, what's difficult is getting up and taking action"}
					"
				</div>
				<table className="table">
					<tbody>
						<tr>
							<td>
								<hr />
							</td>
							<td className="divider">
								<h2>| |</h2>
							</td>
							<td>
								<hr />
							</td>
						</tr>
					</tbody>
				</table>
				<div className="footer" onClick={getAdvice}>
					<div className="dice">
						<FaDiceFive />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
