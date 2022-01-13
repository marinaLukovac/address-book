import axios from 'axios';
import { useEffect, useState } from 'react';
import ContactList from './components/ContactList';
import NavBar from './components/NavBar';
import GlobalStyle from './components/styled-components/GlobalStyle';
import Wrapper from './components/styled-components/Wrapper';
import { deepCopyArrayOfObj } from './service';
function App() {
	const [contactList, setContactList] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:3004/contacts').then(res => setContactList(deepCopyArrayOfObj(res.data)));
		console.log('list rendered');
	}, []);
	const deleteContact = id => {
		setContactList(prev => deepCopyArrayOfObj(prev).map(contact => contact.id !== id));
		//http delete request
	};
	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<NavBar />
				<ContactList contactList={contactList} deleteContact={deleteContact} />
			</Wrapper>
		</>
	);
}

export default App;
