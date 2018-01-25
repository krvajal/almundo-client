import React from "react";
import HotelCard from "./HotelCard";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	max-width: 900px;
	background-color: peru;
	margin: 0 20px;
`;
const HotelList = ({ hotels }) => {
	return (
		<Container>
			<ul>{hotels.map(hotel => <HotelCard {...hotel} />)}</ul>
		</Container>
	);
};
export default HotelList;
