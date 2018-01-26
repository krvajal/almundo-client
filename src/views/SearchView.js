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
	> * {
		margin: 0 10px;
	}
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
		const { hotels, loading } = this.props;
		return (
			<Container>
				<SearchSidebar />
				{loading && <div> Cargando ... </div>}
				{!loading && <HotelList hotels={hotels} />}
			</Container>
		);
	}
}

const mapStateToProps = state => ({
	hotels: state.hotels.items,
	loading: !state.hotels.loaded
});

export default connect(mapStateToProps)(SearchView);
