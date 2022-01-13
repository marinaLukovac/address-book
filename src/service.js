import axios from 'axios';

const getContactList = async () => await axios.get('http://localhost:3004/contacts');

export { getContactList };
