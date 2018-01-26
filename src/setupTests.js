import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

// SOME BROWSER API MOCKS

// jsdom does not support matchMedia, so here we
// have a mock
window.matchMedia =
	window.matchMedia ||
	function(query) {
		return {
			matches: true,
			addListener(fn) {},
			removeListener(fn) {}
		};
	};
