function Hand({ player, hand }) {
  return (
    <div>
        <h2>{player}</h2>
        {hand.map((card, index) => (
            <div key={index}>{card}</div>
        ))}
    </div>
  )
}

export default Hand