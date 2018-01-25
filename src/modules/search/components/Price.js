import React from "react";
import styled from "styled-components";

const Container = styled.div`
	color: #d75322;
	display: flex;
	align-items: center;
	font-size: 18px;
	margin: 10px 0;
`;
const PriceVal = styled.span`
	font-size: 30px;
	font-weight: 800;
`;

const Price = ({ val }) => (
	<Container>
		{" "}
		ARS <PriceVal>{val}</PriceVal>
	</Container>
);

export default Price;
