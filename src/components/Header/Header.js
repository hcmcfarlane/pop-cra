import "./Header.css";
// import logo from "%PUBLIC_URL%/logo192.png";
import popsquare from "/images/popsquare.svg";
import Button from "../Button/Button";

export default function Header() {
	return (
		<header className="Header" id="header">
			<div id="pop-square">
				<img src="/images/popsquare.svg" alt="" />
			</div>
			<div id="title-name">
				<h1>Hannah McFarlane</h1>
			</div>
			<div id="menu-flex-cont">
				<div id="menu-buttons-cont">
					<Button colour="pink" link="#header" text="Home" />
					<Button colour="yellow" link="#projects" text="Projects" />
					<Button colour="blue" link="#contact" text="Contact" />
				</div>
			</div>
		</header>
	);
}
