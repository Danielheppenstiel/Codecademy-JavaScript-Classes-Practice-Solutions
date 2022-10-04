class Player {
    constructor(name, hitsPerMinute) {
        this.name = name;
        this.hitsPerMinute = hitsPerMinute;
        this.balloonCount = 100;
    }

    status() {
        console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`);
    }

}

function balloonAttack(playerOne, playerTwo) {

    for (let i = 1; i <= 10; i++) {
        playerOne.balloonCount -= playerTwo.hitsPerMinute;
        playerTwo.balloonCount -= playerOne.hitsPerMinute;
    }

    playerOne.status();
    playerTwo.status();

    if (playerOne.balloonCount > playerTwo.balloonCount) {
        return 'Player One Wins';
    } else if (playerTwo.balloonCount > playerOne.balloonCount) {
        return 'Player Two Wins';
    } else {
        return 'Tie';
    }

}

const playerOne = new Player('PlayerOne', 10);
const playerTwo = new Player('PlayerTwo', 5);

console.log(balloonAttack(playerOne, playerTwo));