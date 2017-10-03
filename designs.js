let submit = $('form').children().last();
submit.on('click', makeGrid);

/**
* @description Called when the user clicks 'submit'. Builds a table with the number of columns and rows specified by the user. Clears any preexisting table.
* @returns {Boolean} false
*/
function makeGrid() {
	let rows, cols, currentRow, currentCell;

	const CANVAS = $('#pixel_canvas');
	CANVAS.empty();

	//Get dimensions chosen by user
	rows = document.getElementById('input_height').value;
	cols = document.getElementById('input_width').value;

	CANVAS.on('click', 'td', changeCellColor);

	//Build the table cell by cell
	for(let i = 0; i < rows; i++) {
		currentRow = document.createElement('tr');
		CANVAS.append(currentRow);
		for(let j = 0; j < cols; j++) {
			currentCell = document.createElement('td');
			currentRow.append(currentCell);
		}
	}
	return false;
}

/**
* @description Called when the user clicks on a cell in the grid. Causes the background color of that cell to change to the chosen color.
*/
function changeCellColor() {
	event.preventDefault();
	$(this).attr('bgcolor', document.getElementById('colorPicker').value);
}