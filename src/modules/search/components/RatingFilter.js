import React from "react";
import { range } from "rambda";
import StarRating from "../../../common/components/StarRating";

const RatingFilter = props => (
	<div>
		<input type="checbox" />
		{range(1, 6).map(rating => <StarRating rating={rating} />)}
	</div>
);
export default RatingFilter;
