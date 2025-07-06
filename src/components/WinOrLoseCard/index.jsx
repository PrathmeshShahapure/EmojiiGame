
import './index.css'

const WinOrLoseCard = props => {
  const {scoreCount, isWon, replay} = props
  const wonImg = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
  const loseImg = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  if (isWon)
    return (
      <div className="resultContainer">
        <div className="results">
          <h1 className="uWon">You Won</h1>
          <p className="bScore">Best Score</p>
          <p className="score"> {scoreCount}/12 </p>
          <button onClick={replay} className="playBtn" type="button">
            Play Again
          </button>
        </div>
        <div>
          <img className="happyImg" src={wonImg} alt="win or lose" />
        </div>
      </div>
    )

  return (
    <div className="resultContainer">
      <div className="results">
        <h1 className="uWon">You Lose</h1>
        <p className="bScore">Score</p>
        <p className="score"> {scoreCount}/12 </p>
        <button onClick={replay} className="playBtn" type="button">
          Play Again
        </button>
      </div>
      <div className="imgContainer">
        <img className="happyImg" src={loseImg} alt="win or lose" />
      </div>
    </div>
  )
}
export default WinOrLoseCard
