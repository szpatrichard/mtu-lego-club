import React from "react";

import Header from "./components/header/Header";
import About from "./components/about/About";
import Events from "./components/events/Events";
import Join from "./components/join/Join";
import Contact from "./components/contact/Contact";

const App = () => {
	return (
		<>
			<Header />
			<About />
			<Events />
			<Join />
			<Contact />
		</>
	);
};

export default App;
