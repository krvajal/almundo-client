import React from "react";
import { range } from "rambda";
import StarRating from "../../../common/components/StarRating";
import styled from "styled-components";

const FilterRow = styled.div`
	display: flex;
	align-items: center;
`;

const RatingFilter = props => (
	<div>
		<FilterRow>
			<input type="checkbox" /> Todas las estrellas
		</FilterRow>
		{range(1, 6).map(rating => (
			<FilterRow>
				<input type="checkbox" />
				<StarRating rating={rating} />
			</FilterRow>
		))}
	</div>
);
export default RatingFilter;
