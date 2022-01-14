import styled from 'styled-components';

const NavigationStyled = styled.nav`
	padding: 1vh;
	display: grid;
	grid-template-columns: 15% 37% 33% 15%;
	align-items: stretch;
	& i {
		margin: auto;
	}
	& input {
		width: 90%;
		padding: 0.5vh 2vh;
		font-size: 2.5vh;
		font-weight: 200;
		border: 0.2vh solid #a54758;
		border-radius: 0.4vh;
		color: #a54758;
	}
	& button {
		height: 100%;
		margin: auto;
	}
`;

export default NavigationStyled;
