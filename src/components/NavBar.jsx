import { useState } from 'react';
import { Link } from 'react-router-dom';
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
			<Link to="/address-book">
				<Button>&#8962;</Button>
			</Link>
			<input type="text" placeholder="Search By Name" onChange={searchHandler} value={searchString} />
			<Link to="/contacts/new">
				<Button>&#43;</Button>
			</Link>
			<Button
				onClick={() => {
					exportCsvFileArrayOfObjects(filtered);
				}}
			>
				&#8659;
			</Button>
		</NavigationStyled>
	);
};

export default NavBar;
