import Button from './styled-components/Button';

const DeleteButton = ({ deleteContact, id }) => {
	return <Button onClick={() => deleteContact(id)}>X</Button>;
};

export default DeleteButton;
