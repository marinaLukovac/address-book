import axios from 'axios';

const getContactList = async () => await axios.get('https://address-books-server.herokuapp.com/contacts');

const deepCopyArrayOfObj = array => {
	return [...JSON.parse(JSON.stringify(array))];
};

export { getContactList, deepCopyArrayOfObj };
