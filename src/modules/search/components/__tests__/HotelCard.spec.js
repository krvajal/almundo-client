import React from "react";
import { shallow } from "enzyme";
import HotelCard from "../HotelCard";

const hotel = {
	name: "Hotel",
	stars: 4,
	amenities: [],
	image: "",
	price: 100.0
};

it("renders without crashing", () => {
	shallow(<HotelCard {...hotel} />);
});
