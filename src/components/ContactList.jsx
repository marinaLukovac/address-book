import Contact from './Contact';
import ContactsPreview from './styled-components/ContactsPreview';

function ContactList({ contactList, deleteContact }) {
	return (
		<ContactsPreview>
			{contactList.map(contactInfo => (
				<Contact key={contactInfo.id} contactInfo={contactInfo} deleteContact={deleteContact} />
			))}
		</ContactsPreview>
	);
}

export default ContactList;
