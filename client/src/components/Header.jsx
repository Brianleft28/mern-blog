import { Button, TextInput } from "flowbite-react";
import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSearch } from "react-icons/fa";

export default function Header() {
	const path = useLocation().pathname;
	return (
		/* Navbar Brand */
		<Navbar className='border-b-2'>
			<Link
				to='/'
				className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
			>
				Code
				<span className='px-1 py-1 bg-gradient-to-r from-green-400 via-green-600 to-green-700 rounded-lg text-white mx-1'>
					&&
				</span>
				Coffee
			</Link>

			{/* Navbar Search */}
			<form>
				<TextInput
					type='text'
					placeholder='Search...'
					rightIcon={FaSearch}
					className='hidden lg:inline'
				/>
			</form>
			<Button className='w-12 h-10 lg:hidden' color='green' pill>
				<FaSearch />
			</Button>

			{/* Right side Navbar */}
			<div className='flex gap-2 md:order-2'>
				<Button className='w-12 h-10 hidden sm:inline' color='green' pill>
					<FaMoon />
				</Button>

				<Link to='/sign-in'>
					<Button outline gradientDuoTone='greenToBlue'>
						Sign In
					</Button>
				</Link>
				<Navbar.Toggle />

				{/* Navbar Menu */}
			</div>
			<Navbar.Collapse>
				<Navbar.Link active={path === "/"} as={"div"}>
					<Link to='/'>Home</Link>
				</Navbar.Link>
				<Navbar.Link active={path === "/about"} as={"div"}>
					<Link to='/about'>About</Link>
				</Navbar.Link>
				<Navbar.Link active={path === "/projects"} as={"div"}>
					<Link to='/projects'>Projects</Link>
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}
