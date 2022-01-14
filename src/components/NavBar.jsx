import { useState } from 'react/cjs/react.development';
import { deepCopyArrayOfObj, exportCsvFileArrayOfObjects } from '../service';
import Button from './styled-components/Button';
import NavigationStyled from './styled-components/NavigationStyled';

const NavBar = ({ contactList, setFiltered, filtered }) => {
	const [searchString, setsearchString] = useState('');
	const searchHandler = e => {
		const newString = e.target.value.toLowerCase();
		setsearchString(newString);
		setFiltered(deepCopyArrayOfObj(contactList).filter(contact => contact.fullName.toLowerCase().includes(newString)));
	};
	return (
		<NavigationStyled>
			<Button>NEW CONTACT</Button>

			<input type="text" placeholder="Search Contact By Name" onInput={searchHandler} value={searchString} />
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
