import React from "react";
import { shallow } from "enzyme";
import { HotelList } from "../HotelList";

it("renders without crashing", () => {
	const component = shallow(<HotelList hotels={[]} />);
});
