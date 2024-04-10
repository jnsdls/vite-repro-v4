import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./index.css";

// biome-ignore lint/style/noNonNullAssertion: we know its there
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThirdwebProvider>
			<App />
		</ThirdwebProvider>
	</React.StrictMode>,
);
