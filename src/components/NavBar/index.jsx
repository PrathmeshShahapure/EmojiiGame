import './index.css'

const NavBar = props => {
  const {scoreCount, totalScoreCount, isGameinProcess} = props
  return (
    <nav className="navbar">
      <div className="logoNameCon">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="navText">Emoji Game</h1>
      </div>
      <div className="scoreCon">
        {isGameinProcess && <p>Score: {scoreCount} </p>}
        {isGameinProcess && <p>Top Score: {totalScoreCount} </p>}
      </div>
    </nav>
  )
}
export default NavBar