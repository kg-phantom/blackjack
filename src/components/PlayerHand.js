function PlayerHand({ hand }) {
  return (
    <div>
        <h2>You</h2>
        {hand.map((card, index) => (
            <div key={index}>{card}</div>
        ))}
    </div>
  )
}

export default PlayerHand