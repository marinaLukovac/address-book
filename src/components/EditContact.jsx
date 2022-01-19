// import axios from 'axios';
// import { v4 as uuid4 } from 'uuid';
import { useParams } from 'react-router-dom';
import { useRef } from 'react';
import EditForm from './styled-components/EditForm';

const EditContact = ({ filtered }) => {
	// const [firstName, setFirstName] = useState('');
	// const [lastName, setLastName] = useState('');
	// const [city, setCity] = useState('');
	// const [country, setCountry] = useState('');
	const fullName = useRef();
	const streetAddress = useRef();
	const picture = useRef();

	const validateData = e => {
		e.preventDefault();
		let pic = URL.revokeObjectURL(picture.current);
		console.log(fullName.current.value, streetAddress.current.value, pic);
	};

	const { id } = useParams();
	/*

	if (id !== 'new') {
		console.log(id);
		const editedContact = filtered.find(el => el.id === id);
		setfullName(editedContact.fullName);
		setstreetAddress(editedContact.streetAddress);
		setPicture(editedContact.picture);
	}

	if (id !== 'new') {
		console.log(id);
		const editedContact = filtered.find(el => el.id === id);
		setfullName(editedContact.fullName);
		setstreetAddress(editedContact.streetAddress);
		setPicture(editedContact.picture);
	}

	const postContact = e => {
		// let contact = { firstName: firstName, lastName: lastName, streetAddress: streetAddress, city: city, country: country, picture: picture };
		let contact = { fullName: fullName, streetAddress: streetAddress, picture: picture, id: uuid4() };
		axios.post('https://address-books-server.herokuapp.com/contacts', contact);
		e.target.parentNode.reset();
		// setfullName('');
		// setPicture(null);
		// setstreetAddress('');
	};
	const putContact = () => {
		let contact = { fullName: fullName, streetAddress: streetAddress, picture: picture };
		axios.put('https://address-books-server.herokuapp.com/contacts', contact);
		setfullName('');
		setPicture(null);
		setstreetAddress('');
	};
	const uploadPicture = e => {
		const fd = new FormData();
		fd.append('image', e.target.files[0], e.target.files[0].name);
		console.log(fd);
		console.log(e.taget);
		setPicture('');
	};
	*/
	return (
		<EditForm method="post" encType="multipart/form-data" onSubmit={validateData}>
			<div>
				<label htmlFor="fullName">Full Name</label>
				<input className="input-field" type="text" name="fullName" id="fullName" placeholder="e.g. John Smith" required ref={fullName} />
			</div>
			{/* <input className="input-field" type="text" name="firstName" placeholder="e.g. John" required value={firstName} onChange={e=>setFirstName(e.target.value)}/>
			<input className="input-field" type="text" name="lastName" placeholder="e.g. Smith" required value={lastName} onChange={e=>setLastName(e.target.value)}/> */}
			<div>
				<label htmlFor="streetAddress">Street Address</label>
				<input className="input-field" type="text" name="streetAddress" id="streetAddress" placeholder="12 Wall Street" required ref={streetAddress} />
			</div>
			{/* <input className="input-field" type="text" name="city" placeholder="New York" required value={streetAddress} onChange={e=>setCity(e.target.value)}/>
				<label htmlFor="photo">Country</label>
			<input className="input-field" type="text" name="country" placeholder="United States" onChange={e=>setCountry(e.target.value)}/> */}
			<div>
				<label htmlFor="photo">Add Photo</label>
				<input className="input-field" type="file" name="image" id="photo" accept="image/*" required ref={picture} />
			</div>
			{id !== 'new' ? <input className="input-field" type="submit" value="UPDATE CONTACT" /> : <input className="input-field" type="submit" value="CREATE CONTACT" />}
		</EditForm>
	);
};

export default EditContact;
