import React from "react";
import { shallow } from "enzyme";
import { RatingFilter } from "../RatingFilter";

it("renders without crashing", () => {
	const component = shallow(
		<RatingFilter selectedRatings={[]} toggleRating={() => {}} />
	);
	expect(component.find('input[type="checkbox"]').length).toBe(6);
});

it("have only one checked", () => {
	const component = shallow(
		<RatingFilter selectedRatings={[]} toggleRating={() => {}} />
	);
	expect(component.find("input[checked=true]").length).toBe(1);
});

it("have tree items checked", () => {
	const component = shallow(
		<RatingFilter selectedRatings={[1, 2, 3]} toggleRating={() => {}} />
	);
	expect(component.find("input[checked=true]").length).toBe(3);
});
