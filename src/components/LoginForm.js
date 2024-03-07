import React from "react";

function LoginForm() {
	return (
		<form>
			<div className='form-group'>
				<label htmlFor='username'>Username</label>
				<input type='text' id='username' name='username' />
			</div>
			<div className='form-group'>
				<label htmlFor='password'>Password</label>
				<input type='password' id='password' name='password' />
			</div>
			<button type='submit'>Login</button>
		</form>
	);
}

export default LoginForm;
