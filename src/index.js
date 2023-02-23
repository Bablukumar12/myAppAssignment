import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Auth0Provider
			domain="dev-pjsus8njrw26gcnz.us.auth0.com"
			clientId="ZQK5lt7e2PcS5trqIOfVQlSzkPWIQzmU"
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}>
			<Provider store={store}>
				<App />
			</Provider>
		</Auth0Provider>
	</React.StrictMode>
);

reportWebVitals();
