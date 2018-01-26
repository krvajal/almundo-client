import React, { Component } from "react";
import styled from "styled-components";
import { SearchSidebar } from "../modules/search";
import { HotelList } from "../modules/search";
import api from "../common/api";

const Container = styled.div`
	margin: 20px auto;
	display: flex;
	width: 100%;
	max-width: 1024px;

	@media (max-width: 500px) {
		flex-direction: column;
	}
`;
class SearchView extends Component {
	state = {
		hotels: []
	};
	componentDidMount() {
		api.getHotels().then(hotels => {
			console.log({ hotels });
			this.setState({ hotels });
		});
	}
	render() {
		const { hotels } = this.state;
		return (
			<Container>
				<SearchSidebar />
				<HotelList hotels={hotels} />
			</Container>
		);
	}
}

export default SearchView;
