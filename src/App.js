import axios from 'axios';
import { useEffect, useState } from 'react/cjs/react.development';
import ContactList from './components/ContactList';
import NavBar from './components/NavBar';
import GlobalStyle from './components/styled-components/GlobalStyle';
import Wrapper from './components/styled-components/Wrapper';
function App() {
	const [contactList, setContactList] = useState([]);
	useEffect(() => {
		axios.get('https://address-books-server.herokuapp.com/contacts').then(res => setContactList([...JSON.parse(JSON.stringify(res.data))]));
		console.log('list rendered');
	}, []);
	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<NavBar />
				<ContactList contactList={contactList} />
			</Wrapper>
		</>
	);
}

export default App;
