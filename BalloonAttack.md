# Balloon Attack

### Instructions

Two players start with 100 helium balloons. The players shoot pellets at each other's balloons and after 10 minutes the player with the most balloons left wins.

Write a game function `balloonAttack` that takes two `Player` instances, calculates the balloons left for each player after 10 minutes and returns the name of the winner.

### Summary

To start this challenge I created a `class Player` with a `contructor` method that takes two parameters, `name`, `hitsPerMinute` and the `balloonCount` set to `100`.

```
class Player {
    constructor(name, hitsPerMinute) {
        this.name = name;
        this.hitsPerMinute = hitsPerMinute;
        this.balloonCount = 100;
    }
}
```

Below the `constructor` method I implemented a `status()` method that logs the players `name` and `balloonCount` to the console using string interpolation.

```
    status() {
        console.log(`Player: ${this.name} -- Balloons Left: ${this.balloonCount}`);
    }
```

After completing the `class Player` I wrote the game function `balloonAttack`.

```
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
```

Inside the `balloonAttack` function, I started with a `for` loop. With each iteration I subtracted the `balloonCount` of a player from the `hitsPerMinute` of the opposite player. Then logged the result using the `status()` method.

```
    for (let i = 1; i <= 10; i++) {
        playerOne.balloonCount -= playerTwo.hitsPerMinute;
        playerTwo.balloonCount -= playerOne.hitsPerMinute;
    }

    playerOne.status();
    playerTwo.status();
```

Using an `if` statement, I compared the `balloonCount` of each player to return a winner based on which out of the two players had the most remaining balloons. If the remaining balloons are equal, I returned `tie`.

```
    if (playerOne.balloonCount > playerTwo.balloonCount) {
        return 'Player One Wins';
    } else if (playerTwo.balloonCount > playerOne.balloonCount) {
        return 'Player Two Wins';
    } else {
        return 'Tie';
    }
```

**Solution Test**

To test my solution I created two instances of `Player`. I called the `balloonAttack` function with both instances as arguments.

```
const playerOne = new Player('PlayerOne', 10);
const playerTwo = new Player('PlayerTwo', 5);

console.log(balloonAttack(playerOne, playerTwo));
```

### Resources 

- [MDN Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [MDN For Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
- [Codecademy](https://www.codecademy.com/)