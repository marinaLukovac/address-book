import { useState } from 'react';
import { deepCopyArrayOfObj, exportCsvFileArrayOfObjects } from '../service';
import Button from './styled-components/Button';
import NavigationStyled from './styled-components/NavigationStyled';

const NavBar = ({ contactList, setFiltered, filtered }) => {
	const [searchString, setsearchString] = useState('');
	const searchHandler = e => {
		setsearchString(e.target.value);
		setFiltered(deepCopyArrayOfObj(contactList).filter(contact => contact.fullName.toLowerCase().includes(e.target.value.toLowerCase())));
	};
	return (
		<NavigationStyled>
			<Button>NEW CONTACT</Button>

			<input type="text" placeholder="Search Contact By Name" onChange={searchHandler} value={searchString} />
			<Button
				onClick={() => {
					exportCsvFileArrayOfObjects(filtered);
				}}
			>
				EXPORT ALL
			</Button>
		</NavigationStyled>
	);
};

export default NavBar;
