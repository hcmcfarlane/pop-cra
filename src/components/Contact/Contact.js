import "./Contact.css";
import Mondrian from "../Mondrian/Mondrian";

export default function Contact() {
	return (
		<div id="contact-cont">
			<div className="dot-border">
				<h2 id="h2-contact">Contact me!</h2>
				<fieldset>
					<form id="contact-form">
						<input type="text" placeholder="Your name" />
						<textarea
							rows="5"
							placeholder="Your message"></textarea>
						<button type="submit" className="button-yellow">
							Submit
						</button>
					</form>
				</fieldset>
			</div>
			<Mondrian />
		</div>
	);
}
