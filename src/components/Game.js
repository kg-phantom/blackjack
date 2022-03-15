import { useState } from "react"
import CompHand from "./CompHand";
import PlayerHand from "./PlayerHand";

function Game() {
    const cards = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const values = {
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 10,
        'Q': 10,
        'K': 10,
        'A': 11
    }

    const randomIndex = () => Math.floor(Math.random() * 14);

    const [isGameOver, setGameOver] = useState(false);
    const [isPlayerTurn, setPlayerTurn] = useState(true);
    const [playerHand, setPlayerHand] = useState([
        cards[randomIndex()],
        cards[randomIndex()]
    ]);
    const [compHand, setCompHand] = useState([
        cards[randomIndex()],
        cards[randomIndex()]
    ]);

  return (
    <div>
        <PlayerHand hand={playerHand} />
        <CompHand hand={compHand} />
    </div>
  )
}

export default Game