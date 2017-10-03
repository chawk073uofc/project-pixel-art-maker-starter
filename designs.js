let submit = $('form').children().last();
submit.on('click', makeGrid);

function makeGrid() {
	let rows, cols, currentRow, currentCell, color, canvas;

	canvas = $('#pixel_canvas');
	canvas.empty();
	rows = document.getElementById('input_height').value;
	cols = document.getElementById('input_width').value;
	canvas.on('click', 'td', changeCellColor);

	//Build the table cell by cell
	for(let i = 0; i < rows; i++) {
		currentRow = document.createElement('tr');
		canvas.append(currentRow);
		for(let j = 0; j < cols; j++) {
			currentCell = document.createElement('td');
			currentRow.append(currentCell);
		}
	}
	return false;
}

//Called when the user clicks on a cell in the grid. Causes the background color of that cell to change to the chosen color.
function changeCellColor() {
	event.preventDefault();
	console.log("Changing cell color");
	$(this).attr('bgcolor', document.getElementById('colorPicker').value);
}