import Contact from './Contact';
import ContactsPreview from './styled-components/ContactsPreview';

function ContactList({ contactList }) {
	return (
		<ContactsPreview>
			{contactList.map(contactInfo => (
				<Contact key={contactInfo.id} contactInfo={contactInfo} />
			))}
		</ContactsPreview>
	);
}

export default ContactList;
