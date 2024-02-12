import { Button, TextInput } from "flowbite-react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

export default function Header() {
	return (
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

			{/* 			<Button outline gradientDuoTone='purpleToPink'>
				Sign In
			</Button> */}
		</Navbar>
	);
}
