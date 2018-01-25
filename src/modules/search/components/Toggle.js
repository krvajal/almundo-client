import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const color = "#386ea7";

const TriangleUp = styled.div`
	width: 0;
	height: 0;
	border-bottom: solid 8px ${color};
	border-left: solid 8px transparent;
	border-right: solid 8px transparent;
	cursor: pointer;
`;
const TriangleDown = styled.div`
	width: 0;
	height: 0;
	border-top: solid 8px ${color};
	border-left: solid 8px transparent;
	border-right: solid 8px transparent;
	cursor: pointer;
`;
const Toggle = ({ on, onChange }) => (
	<div onClick={onChange}>{on ? <TriangleDown /> : <TriangleUp />}</div>
);

Toggle.propTypes = {
	on: PropTypes.bool.isRequired,
	onChange: PropTypes.func.isRequired
};

export default Toggle;
