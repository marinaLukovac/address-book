import { useEffect, useState } from 'react';
import ContactList from './components/ContactList';
import NavBar from './components/NavBar';
import GlobalStyle from './components/styled-components/GlobalStyle';
import Wrapper from './components/styled-components/Wrapper';
import { deepCopyArrayOfObj, getContactList } from './service';

function App() {
	const [contactList, setContactList] = useState([]);
	const [filtered, setFiltered] = useState([]);

	useEffect(() => {
		getContactList().then(res => {
			setContactList(deepCopyArrayOfObj(res.data));
			setFiltered(deepCopyArrayOfObj(res.data));
		});
		console.log('list rendered');
	}, []);
	const deleteContact = id => {
		setContactList(prev => deepCopyArrayOfObj(prev).map(contact => contact.id !== id));
		setFiltered(prev => deepCopyArrayOfObj(prev).map(contact => contact.id !== id));
		//insert http delete request
	};
	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<NavBar contactList={contactList} filtered={filtered} setFiltered={setFiltered} />
				<ContactList filtered={filtered} deleteContact={deleteContact} />
			</Wrapper>
		</>
	);
}

export default App;
