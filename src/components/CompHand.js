function CompHand({ hand }) {
    return (
      <div>
          <h2>Opponent</h2>
          {hand.map((card, index) => (
              <div key={index}>{card}</div>
          ))}
      </div>
    )
  }
  
  export default CompHand