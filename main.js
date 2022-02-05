let usedSpaces = [];
let space1 = ' ';
let space2 = ' ';
let space3 = ' ';
let space4 = ' ';
let space5 = ' ';
let space6 = ' ';
let space7 = ' ';
let space8 = ' ';
let space9 = ' ';
let turnIndicator = 0; // 0 = Player 1 (X) | 1 = Player 2 (O)
let winnerMarker = 0;

function movePlayer() {
    let spacePlayer = parseInt(prompt(`Choose the space where you want to set your mark and enter the chosen number.`));
    console.log(`Chosen Space: ${spacePlayer}`);
    if (usedSpaces.includes(spacePlayer)) {
        console.log(`Chosen space has already been played. Please choose another.`);
        spacePlayer = movePlayer();
    } else if (spacePlayer <= 0 || spacePlayer > 10 || isNaN(spacePlayer)) {
        console.log(`Input is not valid. Please enter a number between 1 and 9.`);
        spacePlayer = movePlayer();
    }
    return spacePlayer;
}

function displayBoard() {
    console.log(`
    ${space1}|${space2}|${space3}
    -----
    ${space4}|${space5}|${space6}
    -----
    ${space7}|${space8}|${space9}
    `)
}

function updateBoard(chosenSpace) {
    if (turnIndicator === 0) {
        switch (chosenSpace) {
            case 1:
                space1 = 'X';
                break;
            case 2:
                space2 = 'X';
                break;
            case 3:
                space3 = 'X';
                break;
            case 4:
                space4 = 'X';
                break;
            case 5:
                space5 = 'X';
                break;
            case 6:
                space6 = 'X';
                break;
            case 7:
                space7 = 'X';
                break;
            case 8:
                space8 = 'X';
                break;
            case 9:
                space9 = 'X';
                break;
        }
        turnIndicator = 1;
    } else if (turnIndicator === 1) {
        switch (chosenSpace) {
            case 1:
                space1 = 'O';
                break;
            case 2:
                space2 = 'O';
                break;
            case 3:
                space3 = 'O';
                break;
            case 4:
                space4 = 'O';
                break;
            case 5:
                space5 = 'O';
                break;
            case 6:
                space6 = 'O';
                break;
            case 7:
                space7 = 'O';
                break;
            case 8:
                space8 = 'O';
                break;
            case 9:
                space9 = 'O';
                break;
        }
        turnIndicator = 0;
    }
    displayBoard();
    usedSpaces.push(chosenSpace);
}

function checkWinner() {
    if (
        (space1==='X' && space2==='X' && space3==='X')
        || (space4==='X' && space5==='X' && space6==='X')
        || (space7==='X' && space8==='X' && space9==='X')
        || (space1==='X' && space4==='X' && space7==='X')
        || (space2==='X' && space5==='X' && space8==='X')
        || (space3==='X' && space6==='X' && space9==='X')
        || (space1==='X' && space5==='X' && space9==='X')
        || (space3==='X' && space5==='X' && space7==='X')
    ) {
        console.log(`Player 1 wins the game!`);
        winnerMarker = 1;
    } else if (
        (space1==='O' && space2==='O' && space3==='O')
        || (space4==='O' && space5==='O' && space6==='O')
        || (space7==='O' && space8==='O' && space9==='O')
        || (space1==='O' && space4==='O' && space7==='O')
        || (space2==='O' && space5==='O' && space8==='O')
        || (space3==='O' && space6==='O' && space9==='O')
        || (space1==='O' && space5==='O' && space9==='O')
        || (space3==='O' && space5==='O' && space7==='O')
    ) {
        console.log(`Player 2 wins the game!`);
        winnerMarker = 1;
    }
}

console.log(`
    Player 1: X
    Player 2: O

    Choose a space, where you want to set your mark and type the 
    number of that space into the dialog box asking for your chosen space.
    Here is the board you guys are playing on:

    1|2|3
    -----
    4|5|6
    -----
    7|8|9
`);

while (winnerMarker === 0 && usedSpaces.length < 9) {
    updateBoard(movePlayer());
    checkWinner();
}

if (usedSpaces.length === 9) {
    checkWinner();
    if (winnerMarker === 0) {
        console.log(`It's a tie!`);
    }
} 

console.log(`Reload for a new game!`);