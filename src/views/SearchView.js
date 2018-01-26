import React, { Component } from "react";
import styled from "styled-components";
import { SearchSidebar } from "../modules/search";
import { HotelList } from "../modules/search";
import { connect } from "react-redux";
import actions from "../common/actions";
import { MEDIA_QUERIES } from "../common/constants";

const Container = styled.div`
	margin: 20px auto;
	display: flex;
	width: 100%;
	max-width: 1024px;

	@media (max-width: ${MEDIA_QUERIES.SMALL}) {
		flex-direction: column;
		margin: 0;
	}
`;
class SearchView extends Component {
	componentDidMount() {
		this.props.dispatch(actions.fetchHotels());
	}
	render() {
		const { hotels } = this.props;
		return (
			<Container>
				<SearchSidebar />
				<HotelList hotels={hotels} />
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	hotels: state.hotels
});

export default connect(mapStateToProps)(SearchView);
