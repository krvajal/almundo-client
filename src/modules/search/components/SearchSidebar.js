import React from "react";
import styled from "styled-components";
import CollapsableCard from "./CollapsableCard";
import SearchIcon from "../../../common/icons/SearchIcon";
import StarIcon from "../../../common/icons/StarIcon";
import { MEDIA_QUERIES, COLORS } from "../../../common/constants";
import RatingFilter from "./RatingFilter";
import NameFilter from "./NameFilter";

const AsideContainer = styled.div`
	max-width: 300px;
	width: 100%;
	margin: 0 10px;
	@media (max-width: ${MEDIA_QUERIES.SMALL}) {
		margin: 0;
		max-width: 100%;
	}
`;

const Title = styled.h2`
	background-color: white;
	padding: 10px;
	font-size: 14px;
	color: black;
	text-align: left;
	margin: 0;
	@media (max-width: ${MEDIA_QUERIES.SMALL}) {
		color: ${COLORS.PRIMARY_LIGHT};
	}
`;

const color = "#1f64a4";
const SearchSidebar = props => (
	<AsideContainer>
		<Title> Filtros </Title>
		<CollapsableCard
			title={"Nombre del hotel"}
			icon={<SearchIcon fill={color} width={18} heigh={18} />}
		>
			<NameFilter />
		</CollapsableCard>
		<CollapsableCard
			title={"Estrellas"}
			icon={<StarIcon fill={color} width={18} heigh={18} />}
		>
			<RatingFilter />
		</CollapsableCard>
	</AsideContainer>
);
export default SearchSidebar;
