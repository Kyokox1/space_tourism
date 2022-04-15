import React, { StrictMode } from "react";
import { render } from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

render(
	<StrictMode>
		<BrowserRouter>
			<ChakraProvider>
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</StrictMode>,
	document.getElementById("root")
);
