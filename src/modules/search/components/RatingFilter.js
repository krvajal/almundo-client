import React from "react";
import { range } from "rambda";
import StarRating from "../../../common/components/StarRating";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import actions from "../../../common/actions";

const Container = styled.div`
	margin: 10px 0;
`;

const FilterRow = styled.div`
	display: flex;
	align-items: center;
`;

const RatingFilter = ({ selectedRatings, toggleRating, clearRating }) => (
	<Container>
		<FilterRow>
			<input
				type="checkbox"
				checked={selectedRatings.length === 0}
				onChange={clearRating}
			/>{" "}
			Todas las estrellas
		</FilterRow>
		{range(1, 6).map(rating => (
			<FilterRow key={rating}>
				<input
					type="checkbox"
					checked={selectedRatings.includes(rating)}
					onChange={() => toggleRating(rating)}
				/>
				<StarRating rating={rating} />
			</FilterRow>
		))}
	</Container>
);
RatingFilter.propTypes = {
	selectedRatings: PropTypes.array.isRequired,
	toggleRating: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	selectedRatings: state.filters.ratings
});
const mapDispatchToProps = dispatch => ({
	toggleRating(rating) {
		dispatch(actions.toggleRating(rating));
	},
	clearRating() {
		dispatch(actions.clearRatings());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(RatingFilter);
