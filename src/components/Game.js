import { useState, useEffect } from "react";
import CompHand from "./CompHand";
import PlayerHand from "./PlayerHand";

function Game() {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

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

    const getValue = (card) => {
        if(typeof card === 'number') {
            return card;
        }
        else if (card === 'A') {
            return 11;
        }
        else {
            return 10;
        }
    }

    const getTotal = (hand) => hand.reduce((prev, current) => getValue(prev) + getValue(current), 0);
    

    const checkTotal = (hand) => {
        if(getTotal(hand) < 21) {
            console.log('less than 21');
        }
        if(getTotal(hand) > 21) {
            console.log('over 21');
        }
        if(getTotal(hand) === 21) {
            console.log('equals 21');
        }
    }

    const hit = () => {
        if(isPlayerTurn) {
            setPlayerHand([...playerHand, cards[randomIndex()]]);
        } else {
            console.log('comp chooses');
        }
        setPlayerTurn(!isPlayerTurn);
    }

    useEffect(() => {
      if(!isPlayerTurn) {
          checkTotal(playerHand);
      }
    }, [isPlayerTurn])
    

  return (
    <div>
        <PlayerHand hand={playerHand} />
        <CompHand hand={compHand} />
        <button disabled={!isPlayerTurn} onClick={hit}>Hit</button>
        <button disabled={!isPlayerTurn}>Stand</button>
    </div>
  )
}

export default Game