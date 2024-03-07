import React, { useState } from "react";
import { API_LINK } from "../helpers";

function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	console.log(username, password)

	async function test() {
		const response = await fetch(`${API_LINK}smartphones`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		console.log('oi')
		console.log(response)
	}
	test()

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`${API_LINK}login`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ username, password }),
			});
			console.log(response)
			if (response.ok) {
				console.log("Login successful");
			} else {
				console.error("Login failed");
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className='form-group'>
				<label htmlFor='username'>Username</label>
				<input type='text' id='username' name='username' onChange={(e) => setUsername(e.target.value)} />
			</div>
			<div className='form-group'>
				<label htmlFor='password'>Password</label>
				<input type='password' id='password' name='password' onChange={(e) => setPassword(e.target.value)} />
			</div>
			<button type='submit'>Login</button>
		</form>
	);
}

export default LoginForm;
