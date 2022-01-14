import axios from 'axios';

//local server: http://localhost:3004/contacts
//heroku server: https://address-books-server.herokuapp.com/contacts

const getContactList = async () => await axios.get('https://address-books-server.herokuapp.com/contacts');

const deepCopyArrayOfObj = array => {
	const newArray = [...JSON.parse(JSON.stringify(array))];
	// let csvContent = 'data:text/csv;charset=utf-8,' + newArray[0].keys + newArray.map(e => e.join(',')).map('\n');
	// console.log(csvContent);
	return newArray;
};

const getCsvFile = () => {
	const arr = [
		{ fullName: 'Andrey', address: 'Topolska 18', picture: 'https....' },
		{ fullName: 'Anatolij', address: 'Topolska 22', picture: 'https....' },
		{ fullName: 'Alexander', address: 'Topolska 100', picture: 'https....' },
		{ fullName: 'Vladimir', address: 'Topolska 16', picture: 'https....' },
	];
	let csvContent = 'data:text/csv;charset=utf-8,\n' + Object.keys(arr[0]).join(',') + '\n' + arr.map(e => Object.values(e).join(',')).join('\n');
	return csvContent;
};

export { getContactList, deepCopyArrayOfObj, getCsvFile };
