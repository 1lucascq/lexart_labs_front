import React from "react";
import LoginForm from "../components/LoginForm";

function HomePage() {
	return (
		<div className='home-page'>
			<div className='login-container'>
				<LoginForm />
				<button className='register-btn'>Register</button>
			</div>
		</div>
	);
}

export default HomePage;
