# Blackjack
A web application to play Blackjack against a computer.

[Click here](https://kg-phantom.github.io/blackjack/) to go to the application!

![Blackjack app](assets\images\blackjack-sc.PNG)

## React Components
This app uses multiple React components to keep it neat and fast.

### Intro.js
The Intro component is the homepage of the application and explains the rules of the game.

Clicking the Play button will route to `/play`, which renders the Game.js component.

### Game.js
The Game component contains all of the game logic, including state and button click handling.

States:
- `isGameOver`: Boolean for if the game has ended.
- `isPlayerTurn`: Boolean for if it is currently the player's turn.
- `playerHand`: Array of randomly drawn cards in the player's hand.
- `compHand`: Array of randomly drawn cards in the computer's hand.
- `win`: String declaring the win, loss, or tie result of the game.
- `stood`: Boolean for if the player or computer has stood their turn.

Variables:
- `cards`: Array of cards found in a deck. This includes 1-10, face cards, and an ace.

Functions:
- `randomIndex()`: Returns a random index to be use in the cards array.
- `getValue(card)`: Returns the numerical value of a card.
- `getTotal(hand)`: Returns the sum of the values of the cards in a hand.
- `checkDiff()`: Checks how close the player and computer's hands are to 21 in order to determine the winner. Sets the `win` state accordingly.
- `hit()`: Pushes a random card to the hand of the player or computer depending on whose turn it is.
- `stand()`: Passes the turn of the player or computer. Sets the `stood` state to true.
- `compTurn()`: Simulates the computer taking its turn. If the computer's hand total is 17 or greater, the computer stands. If not, then it hits.
- `reset()`: Resets all the states to the default to begin a new game.

The Game component also passes the `playerHand` and `compHand` as props to the Hand component to render the hands to the page.

### Hand.js
The Hand component takes in a hand and renders it to the page. This allows the player to view their hand as well as the computer's hand.

## Technologies
Built with React.