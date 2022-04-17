import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Destination } from "./pages/Destination";
import { Crew } from "./pages/Crew";

import "@fontsource/barlow";
import "@fontsource/barlow-condensed";
import "@fontsource/bellefair";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="destination" element={<Destination />} />
				<Route path="crew" element={<Crew />} />
			</Routes>
		</>
	);
}

export default App;
