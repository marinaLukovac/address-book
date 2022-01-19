import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactList from './components/ContactList';
import EditContact from './components/EditContact';
import NavBar from './components/NavBar';
import GlobalStyle from './components/styled-components/GlobalStyle';
import Wrapper from './components/styled-components/Wrapper';
import { deepCopyArrayOfObj, filterOutContact, getContactList } from './service';

function App() {
	const [contactList, setContactList] = useState([]);
	const [filtered, setFiltered] = useState([]);

	useEffect(() => {
		getContactList().then(res => {
			setContactList(deepCopyArrayOfObj(res.data));
			setFiltered(deepCopyArrayOfObj(res.data));
		});
	}, []);
	//.delete
	const deleteContact = id => {
		setContactList(prev => filterOutContact(id, prev));
		setFiltered(prev => filterOutContact(id, prev));
		//insert http delete request
	};
	return (
		<BrowserRouter>
			<GlobalStyle />
			<Wrapper>
				<NavBar contactList={contactList} filtered={filtered} setFiltered={setFiltered} />
				<Routes>
					<Route exact path="/contacts/:id" element={<EditContact filtered={filtered} />}></Route>
					<Route exact path="/address-book" element={<ContactList filtered={filtered} deleteContact={deleteContact} />}></Route>
				</Routes>
			</Wrapper>
		</BrowserRouter>
	);
}

export default App;
