import axios from 'axios';
import { useState } from 'react/cjs/react.production.min';
import Contact from './Contact';
import ContactsPreview from './styled-components/ContactsPreview';

function ContactList({ filtered, contactList, deleteContact }) {
	// const [images, setImages] = useState([]);
	const [selectedFile, setSelectedFile] = useState(null);
	const fileSelectedHandler = e => {
		console.log(e.target.files[0]);
		if (e.target.files[0].type === 'image/png' || e.target.files[0].type === 'image/jpeg') {
			console.log(e.target.files[0]);
			setSelectedFile(e.target.files[0]);
		}
	};
	const uploadSelectedImage = () => {
		const data = new FormData();
		data.append('image', selectedFile, selectedFile.name);
		axios.post('https://node-mysql-express-addressbook.herokuapp.com/images', data).then(res => console.log(res));
	};
	return (
		<ContactsPreview>
			<input type="file" accept="image/*" required name="picture" id="picture" onChange={fileSelectedHandler} />
			<button onClick={uploadSelectedImage}>UPLOAD IMAGE</button>
			{filtered.map(contactInfo => (
				<Contact key={contactInfo.id} contactInfo={contactInfo} deleteContact={deleteContact} contactList={contactList} />
			))}
		</ContactsPreview>
	);
}

export default ContactList;
