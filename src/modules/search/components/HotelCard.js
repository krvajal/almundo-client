import React from "react";
import styled from "styled-components";
import StarRating from "../../../common/components/StarRating";
import Price from "./Price";
import Button from "../../../common/components/Button";
import AmenitiesIcons from "../../../common/components/AmenitiesIcons";

const color = "#1f64a4";

const Card = styled.div`
	background-color: white;
	padding: 10px;
	margin-bottom: 10px;

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
	text-align: left;
`;
const PriceContainer = styled.div`
	margin: 0 10px;
	border-left: 2px dotted #f1f1f1;
	padding: 10px;
	width: 200px;
	display: flex;
	flex-flow: column;
	align-items: center;
`;
const HotelName = styled.h4`
	margin: 4px 0;
	color: ${color};
	font-size: 14px;
	text-align: left;
`;

const Text = styled.p`
	color: #848484;
	font-size: 12px;
	padding: 0 40px;
`;
const AmenitiesIcon = styled.img`
	height: 18px;
	margin: 4px;
`;

const HotelCard = ({ name, stars, price, amenities }) => (
	<Card>
		<ThumbnailContainer />
		<InfoContainer>
			<HotelName>{name} </HotelName>
			<StarRating rating={stars} />
			{amenities.map(name => (
				<AmenitiesIcon src={AmenitiesIcons[name]} />
			))}
		</InfoContainer>
		<PriceContainer>
			<Text> Precio por noche por habitacion </Text>
			<Price val={price} />
			<Button title={"Ver Hotel"} />
		</PriceContainer>
	</Card>
);

export default HotelCard;
