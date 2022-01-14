import Contact from './Contact';
import ContactsPreview from './styled-components/ContactsPreview';

function ContactList({ filtered, deleteContact }) {
	console.log('ContactList rendered');
	return (
		<ContactsPreview>
			{filtered.map(contactInfo => (
				<Contact key={contactInfo.id} contactInfo={contactInfo} deleteContact={deleteContact} />
			))}
		</ContactsPreview>
	);
}

export default ContactList;
