import styled from 'styled-components';
const ContactPreview = styled.li`
	width: 20vw;
	padding: 2vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	& div {
		background-color: red;
		width: 20vw;
		height: 20vw;
		border-radius: 50%;
		background-position: center;
		background-size: cover;
	}
`;

export default ContactPreview;
