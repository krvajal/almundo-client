import React from "react";
import styled from "styled-components";
import Button from "../../../common/components/Button";
import { connect } from "react-redux";
import actions from "../../../common/actions";

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

const NameFilter = ({ searchTerm, onSearch }) => {
	let searchField;
	const handleSubmit = evt => {
		evt.preventDefault();
		onSearch(searchField.value);
	};
	return (
		<form onSubmit={handleSubmit}>
			<FilterRow>
				<Input
					initialValue={searchTerm}
					type="text"
					placeholder="Ingrese el nombre del hotel"
					innerRef={node => (searchField = node)}
				/>

				<Button title={"Aceptar"} />
			</FilterRow>
		</form>
	);
};

const mapStateToProps = state => ({
	searchTerm: state.filters.searchTerm
});
const mapDispatchToProps = dispatch => ({
	onSearch(searchTerm) {
		dispatch(actions.search(searchTerm));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(NameFilter);
