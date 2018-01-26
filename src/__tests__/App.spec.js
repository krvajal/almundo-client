import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

// mock for match media
window.matchMedia =
	window.matchMedia ||
	function(query) {
		return {
			matches: true,
			addListener(fn) {},
			removeListener(fn) {}
		};
	};

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});
