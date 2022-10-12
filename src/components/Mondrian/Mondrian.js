import { useEffect, useState } from "react";
import { generateMondrian } from "./generateMondrian.js";
import "./Mondrian.css";

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
		console.log(grid[2][3]);
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

	return (
		<div className="dot-border">
			<div id="mondrian-grid" onClick={() => callMondrianGenerator()}>
				<figure>
					<div id="mond-grid" data_id={dataIdKey.data_id}></div>
					{colourGrid.map((r, rowi) => {
						return r.map((c, colj) => {
							return (
								<div
									className={`square${rectangles}`}
									style={{
										gridArea: `${rowi + 1}/${colj + 1}/${
											rowi +
											Math.floor(Math.random() * 2) + //TODO: replace random number with actual number of remaining spaces (availabilityRight and availabilityDown in original)
											1
										}/${
											colj +
											Math.floor(Math.random() * 2) +
											1
										}`,
										backgroundColor: `${colourGrid[r][c]}`, //TODO: This doesn't work for some reason!?
									}}
									key={`row-${rowi} col-${colj}`}></div>
							);
						});
					})}
					<figcaption>
						Click to generate new.{" "}
						<span id="mond-info">
							<a>(info)</a>
						</span>
						<br />
						Developed by{" "}
						<a href="https://twitter.com/sanja_kaz">@sanja_kaz</a>
						<p>
							{colourGrid.length > 0 && colourGrid.length} and{" "}
							{colourGrid.length > 0 && colourGrid[0].length}
						</p>
					</figcaption>
				</figure>
			</div>
		</div>
	);
}
