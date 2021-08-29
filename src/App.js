import React from "react";
import HomeContainers from "./Containers/HomeContainers";
import HeaderContainers from "./Containers/HeaderContainer";
import "./App.css";

function App() {
	return (
		<div className="App">
			<HeaderContainers />
			<HomeContainers />
		</div>
	);
}

export default App;
