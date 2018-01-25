import React from "react";
import styled from "styled-components";
import StarRating from "../../../common/components/StarRating";

const Card = styled.div`
	background-color: white;
	padding: 10px;
	margin-bottom: 10px;
	width: 100%;
	display: flex;
`;
const ThumbnailContainer = styled.div`
	width: 150px;
	height: 150px;
	border: 1px solid black;
`;
const InfoContainer = styled.div`
	margin: 0 10px;
	flex-grow: 1;
`;
const PriceContainer = styled.div`
	margin: 0 10px;
	border-left: 2px dotted #f1f1f1;
	padding: 10px;
	width: 150px;
`;

const HotelCard = ({ name, stars, price }) => (
	<Card>
		<ThumbnailContainer />
		<InfoContainer>
			{name}
			<StarRating rating={stars} />
		</InfoContainer>
		<PriceContainer>
			<p> Precio por noche por habitacion </p>
			{price}
		</PriceContainer>
	</Card>
);

export default HotelCard;
