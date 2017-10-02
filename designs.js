// Select color input
// Select size input

let submit = $('form').children().last();
submit.on('click', makeGrid);

function makeGrid() {
	$('body').append('<p>"Hello"</p>');
	let rows, cols, currentRow, currentCell, color, canvas;

	rows = $('#input_height').attr('value');
	console.log('rows:' + rows);
	cols = $('#input_width').attr('value');
	console.log('cols:' + cols);

	rows = 5;
	cols = 5;
	canvas = $('#pixel_canvas');
	for(let i = 0; i < rows; i++) {
		currentRow = document.createElement('tr');
		canvas.append(currentRow);
		for(let j = 0; j < rows; j++) {
			currentCell = document.createElement('td');
			currentRow.append(currentCell);
		}
	}
	console.log(canvas);
	return false;
}

//Called when the user clicks on a cell in the grid. Causes the background color of that cell to change to the chosen color.
function changeCellColor() {

}