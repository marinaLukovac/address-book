import axios from 'axios';

//local server: http://localhost:3004/contacts
//heroku server: https://address-books-server.herokuapp.com/contacts

const getContactList = async () => await axios.get('http://localhost:3004/contacts');

const deepCopyArrayOfObj = array => {
	return [...JSON.parse(JSON.stringify(array))];
};

export { getContactList, deepCopyArrayOfObj };
