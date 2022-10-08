import "./Button.css";

export default function Button({ colour, text, link, target }) {
	let classColour;
	let linkTarget;
	let linkLink;
	let buttonText;
	colour ? (classColour = "button-" + colour) : (classColour = "button-blue");
	target ? (linkTarget = target) : (linkTarget = "");
	link ? (linkLink = link) : (linkLink = "");
	text ? (buttonText = text) : (buttonText = "");

	return (
		<button className={classColour}>
			<a href={`${linkLink}`} target={linkTarget}>
				{buttonText}
			</a>
		</button>
	);
}
