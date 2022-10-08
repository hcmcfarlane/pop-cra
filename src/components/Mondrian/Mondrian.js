import { useEffect, useState } from "react";
import { generateMondrian } from "./generateMondrian.js";

// document.onload = generateMondrian();
// document.getElementsByTagName("button")[0].onclick = function () {
// 	generateMondrian();
// };
// document.getElementById("mond-grid").onclick = function () {
// 	generateMondrian();
// };

export default function Mondrian() {
	const [gridWidth, setGridWidth] = useState("");
	const [gridHeight, setGridHeight] = useState("");
	const [dataId, setDataId] = useState("");

	useEffect(() => {
		callMondrianGenerator();
	});

	function callMondrianGenerator() {
		let w;
		let h;
		let d;
		({ w, h, d } = generateMondrian());
		setGridWidth(w);
		setGridHeight(h);
		setDataId(d);
	}

	const divStyle = {
		gridArea: `${rowIndex + 1}/${colIndex + 1}/${rowIndex + rows + 1}/${
			colIndex + cols + 1
		}`,
		background: squareColor,
	};

	// updateHTMLandCSS = (
	//     elems, //rectanglesTotal in total
	//     colIndex, //col
	//     rowIndex, //row
	//     cols, //moveRight
	//     rows, //moveDown
	//     squareColor //color
	// )

	// updateHTMLandCSS(
	//     rectanglesTotal,
	//     col,
	//     row,
	//     moveRight,
	//     moveDown,
	//     color
	// );

	return (
		<div class="dot-border">
			<div id="mondrian-grid" onClick={() => callMondrianGenerator()}>
				<figure>
					<div id="mond-grid" className data_id={dataId}>
						<div className={divClass} style={{}}></div>
					</div>
					<figcaption>
						Click to generate new.{" "}
						<span id="mond-info">
							<a>(info)</a>
						</span>
						<br />
						Developed by{" "}
						<a href="https://twitter.com/sanja_kaz">@sanja_kaz</a>
					</figcaption>
				</figure>
			</div>
		</div>
	);
}
