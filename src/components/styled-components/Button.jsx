import styled from 'styled-components';

const Button = styled.button`
	padding: 0.5vh 1vh;
	height: 35%;
	font-size: 2.5vh;
	font-weight: 200;
	border: 0.2vh solid #a54758;
	border-radius: 0.4vh;
	color: #a54758;
	&:hover {
		background-color: #a54758;
		color: #fff;
		border-color: #fff;
		font-style: bold;
		font-weight: 500;
	}
`;
export default Button;
