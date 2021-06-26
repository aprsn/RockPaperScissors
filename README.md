# Rock Paper Scissors

This simple game is built by using HTML / CSS / JS. This repository is created for educational purposes. Here, I'm explaining how to build this game without creating complicated if-else blocks. 

## Explanation

```javascript
const wins = [
  { m1: 0, m2: 2 },
  { m1: 1, m2: 0 },
  { m1: 2, m2: 1 },
]; // This JSON includes win moves. Other moves means you lost.

```

```javascript

function resultDecider() {
  if (person == computer) {
    return "Scoreless.";
  }

  const findMovement = wins.filter((x) => x.m1 === person); // Find our move.

  if (findMovement[0].m2 === computer) { // If the second move equals to computer move, we win. Otherwise, we lost.
    return "You Win!";
  }

  return "You Lost.";
}
```
