import React from "react";
import styled from "styled-components";
import { SearchSidebar } from "../modules/search";
import { HotelList } from "../modules/search";
import hotels from "./preload.json";

const Container = styled.div`
	margin: 20px;
	display: flex;
`;
const SearchView = props => (
	<Container>
		<SearchSidebar />
		<HotelList hotels={hotels} />
	</Container>
);

export default SearchView;
