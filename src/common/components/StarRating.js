import React from "react";
import StarIcon from "../icons/StarIcon";
import { range } from "rambda";
import styled from "styled-components";
const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	margin: 6px 0;
`;

const StarRating = ({ rating }) => (
	<Container>
		{range(1, rating + 1).map(item => (
			<StarIcon fill="#f5ae27" width={16} height={16} />
		))}
	</Container>
);
export default StarRating;
