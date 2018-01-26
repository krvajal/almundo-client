import React from "react";
import styled from "styled-components";
import StarRating from "../../../common/components/StarRating";
import Price from "./Price";
import Button from "../../../common/components/Button";
import AmenitiesIcons from "../../../common/components/AmenitiesIcons";
import { MEDIA_QUERIES, COLORS } from "../../../common/constants";

const DetailButton = styled.button`
	height: 35px;
	padding: 0 10px;
	color: white;
	font-size: 16px;
	font-weight: 600;
	background: #163474;
	margin: 0 10px;
	border: none;
	width: 100%;
	max-width: 375px;
	border-radius: 4px;
	cursor: pointer;
`;
const Card = styled.div`
	background-color: white;
	padding: 10px;
	margin-bottom: 10px;
	align-items: center;
	display: flex;
	@media (max-width: ${MEDIA_QUERIES.SMALL}) {
		flex-direction: column;
		align-items: stretch;
		margin: 10px;
	}
`;
const Thumbnail = styled.div`
	width: 200px;
	min-width: 200px;
	height: 137px;
	background: url(${props => props.src});
	background-size: cover;
	background-repeat: no-repeat;
	@media (max-width: ${MEDIA_QUERIES.SMALL}) {
		width: 100%;
		height: 200px;
	}
`;
const InfoContainer = styled.div`
	margin: 0 10px;
	align-self: flex-start;
	flex-grow: 1;
	text-align: left;
`;
const PriceContainer = styled.div`
	margin: 0 10px;
	display: flex;
	flex-flow: column;
	align-items: center;
	@media (min-width: ${MEDIA_QUERIES.SMALL}) {
		width: 200px;
		min-width: 200px;
		padding-left: 30px;
		border-left: 2px dashed #c1c1c1;
	}
	@media (max-width: ${MEDIA_QUERIES.SMALL}) {
		padding-top: 10px;
		margin-top: 20px;
		border-top: 2px dashed #646464;
	}
`;
const HotelName = styled.h4`
	margin: 4px 0;
	color: ${COLORS.PRIMARY_LIGHT};
	font-size: 14px;
	text-align: left;
`;

const Text = styled.p`
	color: #848484;
	font-size: 12px;
	padding: 0 20px;
`;
const AmenitiesIcon = styled.img`
	height: 18px;
	margin: 4px;
`;

const HotelCard = ({ name, stars, price, amenities, image }) => (
	<Card>
		<Thumbnail src={image} />
		<InfoContainer>
			<HotelName>{name} </HotelName>
			<StarRating rating={stars} />
			{amenities.map(name => (
				<AmenitiesIcon key={name} src={AmenitiesIcons[name]} />
			))}
		</InfoContainer>
		<PriceContainer>
			<Text> Precio por noche por habitacion </Text>
			<Price val={price} />
			<DetailButton>Ver Hotel</DetailButton>
		</PriceContainer>
	</Card>
);

export default HotelCard;
