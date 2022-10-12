export const generateMondrian = () => {
	// document.getElementById("mond-grid").innerHTML = "";
	const colorS = [
		"#15a7e0", //blue
		"#db1083", //red
		"#f7d221", // yellow
		"#edebe0", // white
		"#edebe0", //white
		"#edebe0", //white
		"#d7dee2", // grey
		"#d7dee2", // grey
		"#15a7e0;", //blue
		"#db1083", //red
		"#f7d221", // yellow
		"#edebe0", // white
		"#edebe0", //white
		"#edebe0", //white
		"#d7dee2", // grey
		"#d7dee2", // grey
		"#100e0f", // black
	];
	const gridWidth = generateRandomNumber(4, 5);
	const gridHeight = generateRandomNumber(4, 5);
	let grid = generateGrid(gridWidth, gridHeight);
	let rectanglesTotal = 1;
	let dataId;

	// loop through rows and columns
	for (let row = 0; row < gridHeight; row++) {
		for (let col = 0; col < gridWidth; col++) {
			if (grid[row][col] === 0) {
				//spots available
				const availabilityDown = gridHeight - row - 1;
				let indxOfNextSpace = col + 1;
				let availabilityRight = 0;

				for (let i = indxOfNextSpace; i < gridWidth; i++) {
					if (grid[row][i] !== 0) {
						break;
					}
					availabilityRight++;
				}

				//how many available spots to move
				const moveRight = generateRandomNumber(1, availabilityRight);
				const moveDown = generateRandomNumber(1, availabilityDown);

				//chose a color and change the grid array item from 0 to color name
				let color = colorS[generateRandomNumber(0, colorS.length - 1)];

				let newGrid = grid.map((rows, index) => {
					if (index >= row && index <= row + moveDown - 1) {
						let newCols = rows.map((cols, i) => {
							if (
								i >= col &&
								i <= col + moveRight - 1 &&
								cols === 0
							) {
								return color;
							} else return cols;
						});
						return newCols;
					} else return rows;
				});
				grid = newGrid;

				//update HTML and CSS from utils.js
				dataId = updateHTMLandCSS(
					rectanglesTotal,
					col,
					row,
					moveRight,
					moveDown,
					color
				);
				rectanglesTotal++;
			}
		}
	}

	//TODO:
	//can't just return the parameters of updateHTMLandCSS function as variables from the generateMondrian function, as the generate function wants to loop over them (and set the properties of the element at each point)
	// So I need to figure out how to make this react-y...

	return {
		gridWidth,
		gridHeight,
		dataId,
		rectanglesTotal,
		grid,
		// col,
		// row,
		// moveRight,
		// moveDown,
		// color,
	};
};

// HELPER FUNCTIONS utils.js
// generate random number between min and max
function generateRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// generate a grid width x height
const generateGrid = (width, height) => {
	let gridRow = [];
	for (let i = 0; i < width; i++) {
		gridRow.push(0);
	}
	let grid = [];
	for (let g = 0; g < height; g++) {
		grid.push(gridRow);
	}

	/* #️⃣ Move this into the return statement for generateMond() - don't think it needs to be in a for loop? Should only be applied once for the height and width values?  not sure why loop is here #️⃣*/
	// for (let d = 0; d < width * height; d++) {
	// 	let section = document.getElementById("mond-grid");
	// 	section.style.gridTemplateColumns = `repeat(${width}, 1fr)`;
	// 	section.style.gridTemplateRows = `repeat(${height}, 1fr)`;
	// }
	return grid;
};

/*💥💥 This function (updateHTMLandCSS) needs to loop over the rows and cols, as it assigns the colours to each one - how to move this into react-land??? 💥*/
//TODO: remove all the query selectors as they are now in the component, I think?

//update HTML and CSS
const updateHTMLandCSS = (
	elems, //rectanglesTotal in total
	colIndex, //col
	rowIndex, //row
	cols, //moveRight
	rows, //moveDown
	squareColor //color
) => {
	const divClass = `square${elems}`;
	document
		.getElementById("mond-grid")
		.appendChild(document.createElement("div"))
		.classList.add(`square${elems}`);
	document.querySelector(`.square${elems}`).style.gridArea = `${
		rowIndex + 1
	}/${colIndex + 1}/${rowIndex + rows + 1}/${colIndex + cols + 1}`;
	document.querySelector(`.square${elems}`).style.background = squareColor;
	let data_id = updateDataId(
		squareColor,
		`${rowIndex + 1}/${colIndex + 1}/${rowIndex + rows + 1}/${
			colIndex + cols + 1
		}`
	);

	return { divClass, data_id };
};

let data_colors = "";
let data_gridArea = "";
const updateDataId = (colorString, gridAreaStr) => {
	data_colors.concat(colorString);
	data_gridArea.concat(gridAreaStr);
	// document
	// .getElementById("mond-grid")
	// .setAttribute("data-id", `${data_colors}${data_gridArea}`);
	return `${data_colors}${data_gridArea}`;
};
