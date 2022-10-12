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
	const [gridW, setGridW] = useState(0);
	const [gridH, setGridH] = useState(0);
	const [dataIdKey, setDataIdKey] = useState("");
	const [rectangles, setRectangles] = useState(0);
	const [colourGrid, setColourGrid] = useState([]);

	useEffect(() => {
		callMondrianGenerator();
	}, []);

	function callMondrianGenerator() {
		const { gridWidth, gridHeight, dataId, rectanglesTotal, grid } =
			generateMondrian();
		// console.log({ gridWidth, gridHeight, dataId, rectanglesTotal, grid });
		setGridW(gridWidth);
		setGridH(gridHeight);
		setDataIdKey(dataId);
		setRectangles(rectanglesTotal);
		setColourGrid(grid);
	}

	// const divStyle = {
	// 	gridArea: `${rowIndex + 1}/${colIndex + 1}/${rowIndex + rows + 1}/${
	// 		colIndex + cols + 1
	// 	}`,
	// 	background: squareColor,
	// };

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
		<div className="dot-border">
			<div id="mondrian-grid" onClick={() => callMondrianGenerator()}>
				<figure>
					<div id="mond-grid" data_id={dataIdKey}></div>
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
