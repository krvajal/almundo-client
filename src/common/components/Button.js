import React from "react";
import styled from "styled-components";

const Button = ({ title }) => {
	const StyledButton = styled.button`
		height: 35px;
		padding: 0 10px;
		color: white;
		font-size: 16px;
		font-weight: 600;
		background: #163474;
		margin: 0 10px;
		border: none;
		width: 100%;
		border-radius: 4px;
		cursor: pointer;
	`;

	return <StyledButton> {title}</StyledButton>;
};

export default Button;
