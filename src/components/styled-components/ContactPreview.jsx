import styled from 'styled-components';
const ContactPreview = styled.li`
	padding: 1vh 2vh;
	margin: 1vh 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;
	& .picture-frame {
		background-color: red;
		width: 15vh;
		height: 15vh;
		border-radius: 50%;
		background-position: center;
		background-size: cover;
	}
	& .delete-edit {
		height: 15vh;
		display: flex;
		flex-direction: column;
		align-items: stretch;
		justify-content: space-evenly;
		visibility: hidden;
	}
	& h3 {
		color: #808080;
		font-size: 4vh;
		font-weight: 500;
	}
	& p {
		color: #707070;
		font-size: 3vh;
		font-weight: 200;
	}
	&:hover,
	&:hover p,
	&:hover h3,
	&:hover .delete-edit {
		background-color: #fff;
		color: #a54758;
		transition: background-color 0.3s ease-in;
		transition: color 0.5s ease-in;
		visibility: visible;
	}
	${'' /* & p,
	h3,
	.delete-edit:hover {
		background-color: #fff;
		outline: none;
		border: none;
		outline: none;
	} */}
`;

export default ContactPreview;
