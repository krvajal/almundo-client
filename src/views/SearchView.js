import React from "react";
import styled from "styled-components";
import { SearchSidebar } from "../modules/search";
const Container = styled.div`
	margin: 20px;
`;
const SearchView = props => (
	<Container>
		<SearchSidebar />
	</Container>
);

export default SearchView;
