import React from "react";
import { shallow } from "enzyme";
import { HotelList } from "../HotelList";

const hotels = [
	{
		id: 1,
		name: "Hotel",
		stars: 4,
		amenities: [],
		image: "",
		price: 100.0
	}
];
it("renders without crashing", () => {
	const component = shallow(<HotelList hotels={[]} />);
});

it("renders the proper number of cards", () => {
	const component = shallow(<HotelList hotels={hotels} />);
	expect(component.find("HotelCard").length).toBe(1);
});
