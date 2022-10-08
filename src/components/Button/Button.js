import "./Button.css";

export default function Button({ colour, text, link, target }) {
	let classColour = "button-" + colour;
	let linkTarget;
	target ? (linkTarget = target) : (linkTarget = "");

	return (
		<button className={classColour}>
			<a href={`${link}`} target={linkTarget}>
				{text}
			</a>
		</button>
	);
}
