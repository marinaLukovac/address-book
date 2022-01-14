import { useState } from 'react/cjs/react.development';
import { deepCopyArrayOfObj } from '../service';
import Button from './styled-components/Button';
import NavigationStyled from './styled-components/NavigationStyled';

const NavBar = ({ contactList, setFiltered }) => {
	const [searchString, setsearchString] = useState('');
	console.log('navbar rendered');
	return (
		<NavigationStyled>
			<Button>NEW CONTACT</Button>

			<input
				type="text"
				placeholder="Search Contact By Name"
				onInput={e => {
					const newString = e.target.value.toLowerCase();
					setsearchString(newString);
					setFiltered(deepCopyArrayOfObj(contactList).filter(contact => contact.fullName.toLowerCase().includes(newString)));
				}}
				value={searchString}
			/>
			<Button>EXPORT ALL</Button>
		</NavigationStyled>
	);
};

export default NavBar;
