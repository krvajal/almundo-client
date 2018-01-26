import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Toogle from "./Toggle";
import { MEDIA_QUERIES, COLORS } from "../../../common/constants";
const color = "#1f64a4";

const Container = styled.div`
	background-color: white;
	padding: 10px;
	margin: 5px 0;
	@media (max-width: ${MEDIA_QUERIES.SMALL}) {
		margin: 0;
	}
`;

const Header = styled.header`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	color: ${color};
	@media (max-width: ${MEDIA_QUERIES.SMALL}) {
		justify-content: center;
	}
`;

const Tittle = styled.div`
	display: flex;
	align-items: center;
`;

const IconContainer = styled.div`
	width: 20px;
	height: 20px;
	margin-right: 10px;
`;
const BodyContainer = styled.div`
	margin-top: 10px;
`;

class CollapsableCard extends Component {
	state = {
		collapsed: true
	};
	render() {
		const content = !this.state.collapsed ? this.props.children : null;
		return (
			<Container>
				<Header>
					<Tittle>
						<IconContainer>{this.props.icon} </IconContainer>
						{this.props.title}
					</Tittle>
					<Toogle
						on={!this.state.collapsed}
						onChange={this.handleToggle}
					/>
				</Header>
				{!this.state.collapsed && (
					<BodyContainer>{content}</BodyContainer>
				)}
			</Container>
		);
	}
	handleToggle = () => {
		this.setState({ collapsed: !this.state.collapsed });
	};
}
CollapsableCard.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.element
};
export default CollapsableCard;
