import React from "react";
import styled from "styled-components";
import Button from "../../../common/components/Button";

const FilterRow = styled.div`
	display: flex;
	align-items: center;
`;
const Input = styled.input`
	height: 28px;
	flex-grow: 1;
	padding: 0 10px;
	font-size: 14px;
`;

const SearchButtonContainer = styled.div`
	max-width: 150px;
	margin: 0 10px;
`;

const NameFilter = props => (
	<form>
		<FilterRow>
			<Input type="text" placeholder="Ingrese el nombre del hotel" />

			<Button title={"Aceptar"} />
		</FilterRow>
	</form>
);

export default NameFilter;
