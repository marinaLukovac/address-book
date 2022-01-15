import { exportCsvFileArrayOfObjects } from '../service';
import DeleteButton from './DeleteButton';
import Button from './styled-components/Button';
import ContactPreview from './styled-components/ContactPreview';

function Contact({ contactInfo, deleteContact }) {
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
					<Button>EDIT</Button>
					<p>{contactInfo.address}</p>
				</div>
			</div>
			<div className="delete-edit">
				<DeleteButton deleteContact={deleteContact} id={contactInfo.id} />

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
