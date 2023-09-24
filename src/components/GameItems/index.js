import './index.css'

const GameItems = props => {
  const {itemDetail, onClickUserChoice} = props
  const {id, imageUrl} = itemDetail
  const userChoice = () => {
    onClickUserChoice(id)
  }

  console.log(`${id.toLowerCase()}Button`)

  return (
    <button
      className="image-container"
      type="button"
      data-testid={`${id.toLowerCase()}Button`}
      onClick={userChoice}
    >
      <img src={imageUrl} alt={id} className="image" />
    </button>
  )
}

export default GameItems
