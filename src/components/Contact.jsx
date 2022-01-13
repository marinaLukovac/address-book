import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
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
			<h3>{contactInfo.fullName}</h3>
			<p>{contactInfo.address}</p>
			<div className="delete-edit">
				<DeleteButton deleteContact={deleteContact} id={contactInfo.id} />
				<EditButton />
			</div>
		</ContactPreview>
	);
}

export default Contact;
