import React from "react";
import HotelCard from "./HotelCard";
import styled from "styled-components";

const Container = styled.div`
	flex-grow: 1;
	max-width: 900px;
	margin: 0;
`;
const List = styled.ul`
	display: flex;
	flex-flow: column;
	padding: 0;
	margin: 0;
`;

const HotelList = ({ hotels }) => {
	return (
		<Container>
			<List>
				{hotels.map(hotel => <HotelCard key={hotel.id} {...hotel} />)}
			</List>
		</Container>
	);
};

export default HotelList;
