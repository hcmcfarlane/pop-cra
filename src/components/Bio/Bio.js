import "./Bio.css";
import Button from "../Button/Button";

export default function Bio() {
	return (
		<section id="info-sect">
			<div className="main-sect" id="code-cont">
				<h2 id="h2-code">Coding</h2>
				<div className="main-code-wrapper">
					<div className="text-wrapper-code">
						<p className="text">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nesciunt sint, cupiditate deserunt, magni
							rerum delectus qui nemo recusandae doloribus
							blanditiis veritatis distinctio fugiat totam,
							repellat repudiandae!
						</p>
						<p className="text">
							<Button
								colour="blue"
								addClass="github"
								text="GitHub"
								link="https://github.com/hcmcfarlane"
								target="_blank"
							/>
							<Button
								colour="pink"
								addClass="linkedin"
								text="LinkedIn"
								link="https://www.linkedin.com/in/hannah-mcfarlane-8a764777/"
								target="_blank"
							/>
						</p>
						<p className="text">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Nesciunt sint, cupiditate deserunt, magni
							rerum delectus qui nemo recusandae doloribus.
						</p>
					</div>
					<div className="img-bang-wrapper">
						{/* <div className="bg-img-cont"></div> */}
						<img
							id="img-bang"
							src="/images/comic-bang-vintage-style-vintage-comic-style-vector-bang-104334659-TOREPLACE.jpg"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
