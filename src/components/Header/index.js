import './index.css'

const Header = props => {
  const {score} = props
  return (
    <div className="header-container">
      <h1 className="item-text">
        ROCK
        <br />
        PAPER
        <br />
        SCISSORS
        <br />
      </h1>
      <div className="score-container">
        <p className="score-heading">Score</p>
        <p className="score">{score}</p>
      </div>
    </div>
  )
}

export default Header
