import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const Login = () => {

	return (
		<div class="login-body">
			<div class="login-panel ui-fluid">
				<div class="login-panel-header">
					<img src="assets/layout/images/login/logo-sapphire-color.png" alt="sapphire" />
				</div>
				<div class="login-panel-content">
					<div class="p-grid">
						<div class="p-col-12">
							<h1>SAPPHIRE NETWORK</h1>
							<h2>Welcome, please use the form to sign-in</h2>
						</div>
						<div class="p-col-12">
							<span class="p-float-label">
								<InputText id="username" type="text" style={{ width: '100%' }} v-model="username" />
								<label for="username">Username</label>
							</span>
						</div>
						<div class="p-col-12">
							<span class="p-float-label">
								<InputText id="password" type="text" style={{ width: '100%' }} v-model="password" />
								<label for="password">Password</label>
							</span>
						</div>
						<div class="p-col-6">
							<button class="p-link">Forget Password?</button>
						</div>
						<div class="p-col-6" style={{ textAlign: 'right' }}>
							<Button label="NEXT" onClick={() => { window.location = "/#" }} style={{ width: '100%' }} />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login;