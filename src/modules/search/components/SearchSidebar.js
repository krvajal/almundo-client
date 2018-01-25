import React from "react";
import styled from "styled-components";
import CollapsableCard from "./CollapsableCard";
import SearchIcon from "../../../common/icons/SearchIcon";
import StarIcon from "../../../common/icons/StarIcon";
import RatingFilter from "./RatingFilter";
const AsideContainer = styled.div`
	width: 300px;
`;
const Title = styled.h2`
	background-color: white;
	padding: 10px;
	font-size: 14px;
	color: black;
	text-align: left;
`;

const color = "#1f64a4";
const SearchSidebar = props => (
	<AsideContainer>
		<Title> Filtros </Title>
		<CollapsableCard
			title={"Nombre del hotel"}
			icon={<SearchIcon fill={color} width={18} heigh={18} />}
		>
			<div> lorem </div>
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
