import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const color = "#386ea7";
const size = 6;
const Triangle = styled.div`
	width: 0;
	height: 0;
	margin: 0 10px;
	border-left: solid ${size}px transparent;
	border-right: solid ${size}px transparent;
	cursor: pointer;
`;
const TriangleUp = Triangle.extend`
	border-bottom: solid ${size}px ${color};
`;
const TriangleDown = Triangle.extend`
	border-top: solid ${size}px ${color};
`;
const Toggle = ({ on, onChange }) => (
	<div onClick={onChange}>{on ? <TriangleUp /> : <TriangleDown />}</div>
);

Toggle.propTypes = {
	on: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired
};

export default Toggle;
