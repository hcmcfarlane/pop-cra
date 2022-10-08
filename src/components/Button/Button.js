import "./Button.css";

export default function Button({ colour, text, link }) {
	let classColour = "button-" + colour;

	return (
		<button className={classColour}>
			<a href={`${link}`}>{text}</a>
		</button>
	);
}
