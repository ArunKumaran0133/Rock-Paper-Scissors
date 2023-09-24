import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'

import GameItems from '../GameItems'
import Header from '../Header'

import './index.css'

const gameStatusObj = {
  inProgress: 'IN_PROGRESS',
  win: 'WIN',
  lose: 'LOSE',
  draw: 'DRAW',
}

class Game extends Component {
  state = {
    score: 0,
    userChoice: '',
    gameChoice: '',
    gameStatus: gameStatusObj.inProgress,
  }

  onClickUserChoice = id => {
    this.setState(
      {userChoice: id, gameChoice: this.getGameChoice()},
      this.evaluateGame,
    )
  }

  onclickGotoGameView = () => {
    this.setState({gameStatus: gameStatusObj.inProgress})
  }

  getGameChoice = () => {
    const {choicesList} = this.props
    const gameChoiceList = choicesList.map(choice => choice.id)
    const randomIndex = Math.floor(Math.random() * 3)
    return gameChoiceList[randomIndex]
  }

  evaluateGame = () => {
    const {userChoice, gameChoice} = this.state
    if (userChoice === gameChoice) {
      this.setState({gameStatus: gameStatusObj.draw})
    } else if (userChoice === 'ROCK') {
      if (gameChoice === 'SCISSORS') {
        this.setState(prevState => ({
          gameStatus: gameStatusObj.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusObj.lose,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'PAPER') {
      if (gameChoice === 'ROCK') {
        this.setState(prevState => ({
          gameStatus: gameStatusObj.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusObj.lose,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'SCISSORS') {
      if (gameChoice === 'PAPER') {
        this.setState(prevState => ({
          gameStatus: gameStatusObj.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusObj.lose,
          score: prevState.score - 1,
        }))
      }
    }
  }

  renderGameInProgressView = () => {
    const {choicesList} = this.props
    return (
      <div className="game-items-container">
        <ul className="game-list-container">
          {choicesList.map(eachItem => (
            <GameItems
              key={eachItem.id}
              itemDetail={eachItem}
              onClickUserChoice={this.onClickUserChoice}
            />
          ))}
        </ul>
      </div>
    )
  }

  renderGameWonView = () => {
    const {choicesList} = this.props
    const {gameChoice, userChoice} = this.state
    const userChoiceObjList = choicesList.filter(
      choice => choice.id === userChoice,
    )

    const userChoiceObj = userChoiceObjList[0]

    const gameChoiceObjList = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObj = gameChoiceObjList[0]
    console.log(gameChoiceObj)
    console.log(userChoiceObj)
    return (
      <div className="result-main-container">
        <div className="result-image-container">
          <div className="result-cart-container">
            <p className="gamer-text">You</p>
            <img
              src={userChoiceObj.imageUrl}
              alt="your choice"
              className="result-image"
            />
          </div>
          <div className="result-cart-container">
            <p className="gamer-text">Opponent</p>
            <img
              src={gameChoiceObj.imageUrl}
              alt="opponent choice"
              className="result-image"
            />
          </div>
        </div>
        <p className="result-text">YOU WON</p>
        <button
          type="button"
          onClick={this.onclickGotoGameView}
          className="rules-button"
        >
          Play Again
        </button>
      </div>
    )
  }

  renderGameLostView = () => {
    const {choicesList} = this.props
    const {gameChoice, userChoice} = this.state
    const userChoiceObjList = choicesList.filter(
      choice => choice.id === userChoice,
    )

    const userChoiceObj = userChoiceObjList[0]

    const gameChoiceObjList = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObj = gameChoiceObjList[0]
    console.log(gameChoiceObj)
    console.log(userChoiceObj)

    return (
      <div className="result-main-container">
        <div className="result-image-container">
          <div className="result-cart-container">
            <p className="gamer-text">You</p>
            <img
              src={userChoiceObj.imageUrl}
              alt="your choice"
              className="result-image"
            />
          </div>
          <div className="result-cart-container">
            <p className="gamer-text">Opponent</p>
            <img
              src={gameChoiceObj.imageUrl}
              alt="opponent choice"
              className="result-image"
            />
          </div>
        </div>
        <p className="result-text">YOU LOST</p>
        <button
          type="button"
          onClick={this.onclickGotoGameView}
          className="rules-button"
        >
          Play Again
        </button>
      </div>
    )
  }

  renderGameDrawView = () => {
    const {choicesList} = this.props
    const {gameChoice, userChoice} = this.state
    const userChoiceObjList = choicesList.filter(
      choice => choice.id === userChoice,
    )

    const userChoiceObj = userChoiceObjList[0]

    const gameChoiceObjList = choicesList.filter(
      choice => choice.id === gameChoice,
    )
    const gameChoiceObj = gameChoiceObjList[0]
    console.log(gameChoiceObj)
    console.log(userChoiceObj)
    return (
      <div className="result-main-container">
        <div className="result-image-container">
          <div className="result-cart-container">
            <p className="gamer-text">You</p>
            <img
              src={userChoiceObj.imageUrl}
              alt="your choice"
              className="result-image"
            />
          </div>
          <div className="result-cart-container">
            <p className="gamer-text">Opponent</p>
            <img
              src={gameChoiceObj.imageUrl}
              alt="opponent choice"
              className="result-image"
            />
          </div>
        </div>
        <p className="result-text">IT IS DRAW</p>
        <button
          type="button"
          onClick={this.onclickGotoGameView}
          className="rules-button"
        >
          Play Again
        </button>
      </div>
    )
  }

  renderGameView = () => {
    const {gameStatus} = this.state

    switch (gameStatus) {
      case gameStatusObj.inProgress:
        return this.renderGameInProgressView()
      case gameStatusObj.win:
        return this.renderGameWonView()
      case gameStatusObj.lose:
        return this.renderGameLostView()
      case gameStatusObj.draw:
        return this.renderGameDrawView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state
    return (
      <div className="game-main-container">
        <Header score={score} />
        {this.renderGameView()}
        <div>
          <Popup
            modal
            trigger={
              <button type="button" className="rules-button">
                Rules
              </button>
            }
            closeOnEscape
            window
          >
            {close => (
              <div className="popup-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                  className="image"
                />
                <button type="button" onClick={() => close()}>
                  <RiCloseLine />
                </button>
              </div>
            )}
          </Popup>
        </div>
      </div>
    )
  }
}

export default Game
