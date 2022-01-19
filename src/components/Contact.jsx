import { Link } from 'react-router-dom';
import { exportCsvFileArrayOfObjects } from '../service';
import Button from './styled-components/Button';
import ContactPreview from './styled-components/ContactPreview';

function Contact({ contactInfo, deleteContact, contactList }) {
	return (
		<ContactPreview>
			<div
				className="picture-frame"
				style={{
					backgroundImage: `url("${contactInfo.picture}")`,
				}}
			></div>
			<div className="contact-info">
				<h3>{contactInfo.fullName}</h3>
				<div className="edit-box">
					<Link to={`/contacts/${contactInfo.id}`}>
						<Button>EDIT</Button>
					</Link>
					<p>{contactInfo.address}</p>
				</div>
			</div>
			<div className="delete-edit">
				<Button onClick={() => deleteContact(contactInfo.id)}>X</Button>

				<Button
					onClick={() => {
						exportCsvFileArrayOfObjects([contactInfo]);
					}}
				>
					&#8659;
				</Button>
			</div>
		</ContactPreview>
	);
}

export default Contact;
