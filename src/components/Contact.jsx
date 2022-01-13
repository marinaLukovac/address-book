import ContactPreview from './styled-components/ContactPreview';

function Contact({ contactInfo }) {
	return (
		<ContactPreview>
			<div
				style={{
					backgroundImage: `url("${contactInfo.picture}")`,
				}}
			></div>
			<h3>{contactInfo.fullName}</h3>
			<p>{contactInfo.address}</p>
		</ContactPreview>
	);
}

export default Contact;
