document.addEventListener('DOMContentLoaded', () => {
    const chessboard = document.getElementById('chessboard');

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const cell = document.createElement('div');
            
            if (isEven(row + col)) {
                cell.className = 'cell white';
            } else {
                cell.className = 'cell black';
            }

            if (isDiagonal(row, col)) {
                cell.classList.add('attack');
            }

            chessboard.appendChild(cell);
        }
    }

    function isEven(num) {
        return num % 2 === 0;
    }

    function isDiagonal(row, col) {
        let aRow = 3;
        let aCol = 3;

        return Math.abs(row - aRow) === Math.abs(col - aCol);
    }
});
