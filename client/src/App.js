import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Schedule from "./pages/Schedule";
import Navbar from "./components/Navbar";

function App() {
	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/store' component={Store} />
					<Route exact path='/schedule' component={Schedule} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
