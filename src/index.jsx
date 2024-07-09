import "./styles/reset.css";
import "./styles/styles.css";

import ReactDOM from "react-dom/client";
import Header from "./Header.jsx";
import Main from "./Main.jsx";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
	<>
		<Header />
		<Main />
	</>
);
