import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles.css";

import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import { Footer } from "./components/Footer/Footer.jsx";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
	<>
		<Header />
		<Main />
		<Footer />
	</>
);
