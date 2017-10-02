// Select color input
// Select size input

let submit = $('form').children().last();
submit.on('click', makeGrid(submit.	event));

function makeGrid(event) {
	event.preventDefault();
	let rows, cols, color;

	rows = $('#input_height').attr('value');
	console.log('rows:' + rows);
	cols = $('#input_width').attr('value');
	console.log('cols:' + cols);
// for each row
	// for each col
		//make cell

}

//Called when the user clicks on a cell in the grid. Causes the background color of that cell to change to the chosen color.
function changeCellColor() {

}