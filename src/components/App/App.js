// import logo from "%PUBLIC_URL%/logo192.png";
import Bio from "../Bio/Bio";
import Header from "../Header/Header";
import Contact from "../Contact/Contact";
import "./App.css";

function App() {
	return (
		<div id="App">
			<Header />
			<main>
				<Bio />
				<Contact />
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
