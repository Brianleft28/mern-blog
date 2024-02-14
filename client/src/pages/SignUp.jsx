import { Link } from "react-router-dom";
import { Alert, Button, Label, TextInput } from "flowbite-react";
import { useState } from "react";

export default function SignUp() {
	// estados
	const [formData, setFormData] = useState({});
	const [errorMessage, setErrorMenssage] = useState(null);
	const [loading, setLoading] = useState(false);

	// controlador de formulario
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
	};

	// controlador de envio de formulario
	const handleSubmit = async (e) => {
		e.preventDefault();
		// manejo de error
		if (!formData.username || !formData.email || !formData.password) {
			return setErrorMenssage("Please, fill out all the fields.");
		}
		// envio de solicitud http POST usando fetch.
		try {
			const res = await fetch("/api/auth/sign-up", {
				method: "post",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			const data = await res.json();
		} catch (error) {}
	};

	// renderizado de componente
	return (
		<>
			<div className='min-h-screen mt-16 bg-green'>
				<div className='bg-gradient-to-br from-green-50 via-green-200 to-green-300 flex p-8 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5  '>
					{/* left side */}
					<div className='flex-1 '>
						<Link to='/' className='font-bold dark:text-white text-4xl'>
							Code
							<span className='px-1 py-1 bg-gradient-to-r from-green-400 via-green-600 to-green-700 rounded-lg text-white mx-1'>
								&&
							</span>
							Coffee
						</Link>
						<p className='text-sm mt-5'>
							This is a Indie Project. You can sign up with your email and
							password, or with Google.
						</p>
					</div>
					{/* rigth side */}
					<div className='flex-1'>
						<form className='flex flex-col gap-4' onSubmit={handleSubmit}>
							<div>
								<Label value='Your username' />
								<TextInput
									type='text'
									placeholder='Username'
									id='username'
									onChange={handleChange}
								/>
							</div>
							<div>
								<Label value='Your email' />
								<TextInput
									type='email'
									placeholder='sucorreo@dominio.com'
									autoComplete='username'
									id='email'
									onChange={handleChange}
								/>
							</div>
							<div>
								<Label value='Your password' />
								<TextInput
									type='password'
									placeholder='Password'
									id='password'
									autoComplete='current-password'
									onChange={handleChange}
								/>
							</div>
							<Button gradientDuoTone='greenToBlue' type='submit'>
								{" "}
								Sign Up{""}
							</Button>
						</form>

						<div className='flex gap-2 mt-5'>
							<span>Have an account?</span>
							<Link to='/sign-in' className='text-green-500'>
								Sign In
							</Link>
						</div>
						{errorMessage && (
							<Alert className='mt-5 font-semibold' color='failure'>
								{errorMessage}
							</Alert>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
