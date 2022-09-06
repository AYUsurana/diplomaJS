let players = ['x', 'o'];
let activePlayer = 0;

function startGame() {
	
	activePlayer = 0;
	Play_Board = [];
	
	/*playing field 3x3*/
	for (let i = 0; i < 3; i++){ 
		Play_Board[i] = [];
		for (let j = 0; j < 3; j++){
			Play_Board[i][j] = '';
		}
	}
	
	console.log(Play_Board);
	renderBoard(Play_Board);
}

function click(row, column) {
	
	Play_Board[row][column] = (players[activePlayer]);
	
	renderBoard(Play_Board); 

	for (let row = 0; row < 3; row++) {
		
		let n_row = 0;
		let n_column = 0;
		
		for (let column = 0; column < 3; column++) {
			if (Play_Board[row][column] === 'x') {
				n_row = n_row + 1;
			}
			if (Play_Board[row][column] === 'o') {
				n_column = n_column + 1; 
			}
			if (n_row === 3 || n_column === 3) {
				showWinner(activePlayer);
			}
		}
	}
	
	for (let column = 0; column < 3; column++) {
    
  	let n_row = 0;
  	let n_column = 0;
    
  	for (let row = 0; row < 3; row++) {
    	if (Play_Board[row][column] === 'x') { 
        n_row = n_row + 1; 
      }
    	if (Play_Board[row][column] === 'o') { 
        n_column = n_column + 1; 
      }
    
    	if (n_row === 3 || n_column === 3) { 
        showWinner(activePlayer);
      }
  	}
	}
  
  for (let row = 0; row < 3; row++) {
    
    let n_row = 0;
    let n_column = 0;
    
    for (let column = 0; column < 3; column++) {    
      if (row === column && Play_Board[row][column] === 'x') { 
        n_row = n_row + 1;   
      }
      if (row === column && Play_Board[row][column] === 'o') { 
        n_column = n_column + 1; 
      } 
      if (n_row === 3 || n_column === 3) { 
        showWinner(activePlayer);
      }
    }    
  }
  
  for (let row = 0; row < 3; row++) {
  
    let n_row = 0;
    let n_column = 0
    
    for (let column = 0; column < 3; column++) {
      if (column === 3 - row - 1  && Play_Board[row][column] === 'x') {
        n_row = n_row + 1; 
      }
      if (column === 3 - row - 1  && Play_Board[row][column]=== 'o') {
        n_column = n_column + 1;
      }
      if (n_row === 3 || n_column === 3) { 
        showWinner(activePlayer);
      }
    } 
  }
  
  if (activePlayer === 0) {
    activePlayer = 1;
  } else if(activePlayer === 1) {
    activePlayer = 0;
  }
}