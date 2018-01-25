import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Toogle from "./Toggle";

const color = "#1f64a4";

const Container = styled.div`
	background-color: white;
	padding: 10px;
	margin: 10px 0;
`;

const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${color};
	margin-bottom: 10px;
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
class CollapsableCard extends Component {
	state = {
		collapsed: false
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
				{content}
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
