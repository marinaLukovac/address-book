import styled from 'styled-components';

const Button = styled.button`
	color: red;
	padding: 0.5vh 2vh;
	height: 35%;
	font-size: 2.5vh;
	font-weight: 200;
	border: 0.2vh solid #808080;
	border-radius: 0.4vh;
	color: #808080;
	&:hover {
		background-color: #cacaca;
		color: #fff;
		border-color: #fff;
		font-style: bold;
		font-weight: 500;
	}
`;
export default Button;
