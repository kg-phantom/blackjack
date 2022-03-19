import { useState, useEffect } from "react";
import Hand from "./Hand";

function Game() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];

  const randomIndex = () => Math.floor(Math.random() * 14);

  const [isGameOver, setGameOver] = useState(false);
  const [isPlayerTurn, setPlayerTurn] = useState(true);
  const [playerHand, setPlayerHand] = useState([
    cards[randomIndex()],
    cards[randomIndex()],
  ]);
  const [compHand, setCompHand] = useState([
    cards[randomIndex()],
    cards[randomIndex()],
  ]);
  const [win, setWin] = useState('lost!');
  const [stood, setStood] = useState(false);

  const getValue = (card) => {
    if (typeof card === "number") {
      return card;
    } else if (card === "A") {
      return 11;
    } else {
      return 10;
    }
  };

  const getTotal = (hand) =>
    hand.reduce((prev, current) => getValue(prev) + getValue(current), 0);

  const checkDiff = () => {
      let playerDiff = 21 - getTotal(playerHand);
      let compDiff = 21 - getTotal(compHand);
      if(playerDiff === compDiff) {
          setWin('tied!');
      }
      if(playerDiff < compDiff) {
          setWin('won!');
      }
  }

  const hit = () => {
    if (isPlayerTurn) {
      setPlayerHand([...playerHand, cards[randomIndex()]]);
    } else {
      setCompHand([...compHand, cards[randomIndex()]]);
    }
    setPlayerTurn(!isPlayerTurn);
  };

  const stand = () => {
      if(stood) {
          checkDiff();
          setGameOver(true);
      }
      else {
          setStood(true);
          setPlayerTurn(!isPlayerTurn);
      }
  };

  const compTurn = () => {
    if (getTotal(compHand) < 17) {
      hit();
    } else {
      stand();
    }
  };

  const reset = () => {
    setGameOver(false);
    setWin('lost!');
    setStood(false);
    setPlayerTurn(true);
    setPlayerHand([cards[randomIndex()], cards[randomIndex()]]);
    setCompHand([cards[randomIndex()], cards[randomIndex()]]);
  };

  useEffect(() => {
    if (!isPlayerTurn) {
      if (getTotal(playerHand) < 21) {
        setTimeout(() => compTurn(), 3000);
      }
      if (getTotal(playerHand) > 21) {
        setGameOver(true);
      }
      if (getTotal(playerHand) === 21) {
        setWin('won!');
        setGameOver(true);
      }
    } else {
      if (getTotal(compHand) < 21) {
        return;
      }
      if (getTotal(compHand) > 21) {
        setWin('won!');
        setGameOver(true);
      }
      if (getTotal(compHand) === 21) {
        setGameOver(true);
      }
    }
  }, [isPlayerTurn]);

  return (
    <div className="container">
      <Hand player="You" hand={playerHand} />
      <Hand player="Opponent" hand={compHand} />
      {!isGameOver ? (
        <>
          <button disabled={!isPlayerTurn} onClick={hit}>
            Hit
          </button>
          <button disabled={!isPlayerTurn} onClick={stand}>
            Stand
          </button>
          {!isPlayerTurn ? (
            <h3>Your opponent is taking their turn...</h3>
          ) : null}
        </>
      ) : (
        <>
          <h3>Game Over</h3>
          <p>You {win}</p>
          <button onClick={reset}>Play again</button>
        </>
      )}
    </div>
  );
}

export default Game;
