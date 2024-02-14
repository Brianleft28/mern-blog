import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

export default function SignUp() {
	return (
		<>
			<div className='min-h-screen mt-16 bg-green'>
				<div className='flex p-8 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5  bg-gradient-to-br from-green-300 via-transparent to-green-300'>
					{/* left side */}
					<div className='flex-1'>
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
						<form className='flex flex-col gap-4'>
							<div>
								<Label value='Your username' />
								<TextInput type='text' placeholder='Username' id='username' />
							</div>
							<div>
								<Label value='Your email' />
								<TextInput
									type='email'
									placeholder='sucorreo@dominio.com'
									id='email'
								/>
							</div>
							<div>
								<Label value='Your password' />
								<TextInput
									type='password'
									placeholder='Password'
									id='password'
								/>
							</div>
							<Button gradientDuoTone='greenToBlue' type='submit'>
								{" "}
								Sign Up{" "}
							</Button>
						</form>

						<div className='flex gap-2 mt-5'>
							<span>Have an account?</span>
							<Link to='/sign-in' className='text-green-500'>
								Sign In
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
