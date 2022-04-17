import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Destination } from "./pages/Destination";

import "@fontsource/barlow";
import "@fontsource/barlow-condensed";
import "@fontsource/bellefair";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/destination" element={<Destination />} />
			</Routes>
		</>
	);
}

export default App;
