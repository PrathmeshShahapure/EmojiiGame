import './index.css'

const EmojiCard = props => {
  const {details, emojiClicked} = props
  const {emojiName, emojiUrl, id} = details
  const handelClicked = () => {
    emojiClicked(id)
  }
  return (
    <li>
      <button onClick={handelClicked} type="button" className="emoContainer">
        <img className="emoSize" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
