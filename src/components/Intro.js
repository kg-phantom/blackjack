import { Link } from 'react-router-dom';

function Intro() {
  return (
    <div>
        <h1>Let's Play Blackjack!</h1>

        <h2>How to Play:</h2>
        <p>
            The object of the game is to beat your opponent by getting a count as close to 21 as possible without going over 21.
        </p>
        <h3>Card Values</h3>
        <ul>
            <li>Numbered cards are their number value.</li>
            <li>Face cards are worth 10.</li>
            <li>Aces are worth 11.</li>
        </ul>
        <h3>Gameplay</h3>
        <ol>
            <li>At the start of the game, each player is dealt 2 random cards from the deck.</li>
            <li>
                On your turn, you can choose to:
                <ul>
                    <li>Hit: Draw another card.</li>
                    <li>Stand: Not draw another card.</li>
                </ul>
                If you stand, your opponent executes their turn and whoever is closest to 21 without going over wins.
            </li>
        </ol>

        <h2>Ready?</h2>
        <Link to='/play'>
            <button>Play</button>
        </Link>
    </div>
  )
}

export default Intro