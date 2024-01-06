document.addEventListener('DOMContentLoaded', function () {
    const puzzleContainer = document.getElementById('puzzle-container');

    // Initial state of the puzzle
    const puzzleState = [1, 2, 3, 4, 5, 6, 7, 8, ''];

    // Shuffle the puzzle pieces
    puzzleState.sort(() => Math.random() - 0.5);

    // Generate puzzle pieces dynamically
    puzzleState.forEach((value, index) => {
        const puzzlePiece = document.createElement('div');
        puzzlePiece.classList.add('puzzle-piece');
        puzzlePiece.innerText = value;
        puzzlePiece.setAttribute('data-index', index);
        puzzlePiece.addEventListener('click', () => movePiece(index));
        puzzleContainer.appendChild(puzzlePiece);
    });

    // Function to handle the movement of puzzle pieces
    function movePiece(index) {
        const emptyIndex = puzzleState.indexOf('');
        if (isAdjacent(index, emptyIndex)) {
            // Swap the positions of the clicked piece and the empty space
            [puzzleState[index], puzzleState[emptyIndex]] = [puzzleState[emptyIndex], puzzleState[index]];
            updatePuzzle();
            if (isPuzzleSolved()) {
                alert('Congratulations! Puzzle solved.');
            }
        }
    }

    // Function to update the puzzle in the DOM
    function updatePuzzle() {
        const puzzlePieces = document.querySelectorAll('.puzzle-piece');
        puzzlePieces.forEach((piece, index) => {
            piece.innerText = puzzleState[index];
        });
    }

    // Function to check if two pieces are adjacent
    function isAdjacent(index1, index2) {
        const row1 = Math.floor(index1 / 3);
        const col1 = index1 % 3;
        const row2 = Math.floor(index2 / 3);
        const col2 = index2 % 3;

        return (Math.abs(row1 - row2) === 1 && col1 === col2) || (Math.abs(col1 - col2) === 1 && row1 === row2);
    }

    // Function to check if the puzzle is solved
    function isPuzzleSolved() {
        return puzzleState.every((value, index) => index + 1 === value || value === '');
    }
});
