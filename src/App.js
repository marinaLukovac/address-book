import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import EditContact from './components/EditContact';
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
		<BrowserRouter>
			<GlobalStyle />
			<Wrapper>
				<NavBar contactList={contactList} filtered={filtered} setFiltered={setFiltered} />
				<Routes>
					<Route path="/new" element={<AddContact />}></Route>
					<Route path="/contactId" element={<EditContact />}></Route>
					<Route exact path="/address-book" element={<ContactList filtered={filtered} deleteContact={deleteContact} />}></Route>
				</Routes>
			</Wrapper>
		</BrowserRouter>
	);
}

export default App;
