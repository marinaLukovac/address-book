import styled from 'styled-components';
const ContactPreview = styled.li`
	padding: 1vh;
	margin-top: 1vh;
	display: grid;
	grid-template-columns: 15% 37% 33% 15%;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px;
	& .picture-frame {
		width: 12vh;
		height: 12vh;
		border-radius: 50%;
		background-position: center;
		background-size: cover;
		margin: auto;
	}
	& .delete-edit {
		height: 15vh;
		width: 8vh;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		visibility: hidden;
		margin: auto;
	}
	& h3 {
		color: #808080;
		font-size: 3vh;
		font-weight: 500;
		padding-left: 2vh;
	}
	& p {
		color: #707070;
		font-size: 2vh;
		font-weight: 200;
		padding-left: 2vh;
	}
	&:hover,
	&:hover p,
	&:hover h3,
	&:hover .delete-edit {
		background-color: #fff;
		color: #a54758;
		transition: background-color 0.3s ease-in;
		transition: color 0.3s ease-in;
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
