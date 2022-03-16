import { useState, useEffect } from "react";
import Hand from "./Hand";

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
    const [win, setWin] = useState(false);

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
    

    // const checkTotal = (hand) => {
    //     if(getTotal(hand) < 21) {
    //         console.log('less than 21');
    //     }
    //     if(getTotal(hand) > 21) {
    //         console.log('over 21');
    //     }
    //     if(getTotal(hand) === 21) {
    //         console.log('equals 21');
    //     }
    // }

    const hit = () => {
        if(isPlayerTurn) {
            setPlayerHand([...playerHand, cards[randomIndex()]]);
        } else {
            setCompHand([...compHand, cards[randomIndex()]]);
        }
        setPlayerTurn(!isPlayerTurn);
    }

    const compTurn = () => {
        if(getTotal(compHand) < 17) {
            hit();
        } else {
            console.log('comp stands');
        }
    }

    useEffect(() => {
      if(!isPlayerTurn) {
        if(getTotal(playerHand) < 21) {
            compTurn();
        }
        if(getTotal(playerHand) > 21) {
            setGameOver(true);
        }
        if(getTotal(playerHand) === 21) {
            setWin(true);
            setGameOver(true);
        }
        
      }
    }, [isPlayerTurn])
    

  return (
    <div>
        <Hand player='You' hand={playerHand} />
        <Hand player='Opponent' hand={compHand} />
        {!isGameOver ? (
            <>
            <button disabled={!isPlayerTurn} onClick={hit}>Hit</button>
            <button disabled={!isPlayerTurn}>Stand</button>
            </>
        ) : (
            <>
            <h3>Game Over</h3>
            <p>You {win ? 'won!' : 'lost!'}</p>
            </>
        )}
        
    </div>
  )
}

export default Game