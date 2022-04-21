import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "./pages/Home";
import { Destination } from "./pages/Destination";
import { Crew } from "./pages/Crew";
import { Technology } from "./pages/Technology";

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
				<Route path="technology" element={<Technology />} />
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</>
	);
}

export default App;
