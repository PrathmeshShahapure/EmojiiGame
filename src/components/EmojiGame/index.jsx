
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newEmojiList: props.emojisList,
      scoreCount: 0,
      totalScoreCount: 0,
      isGameinProcess: true,
      listOfClickedEmojis: [],
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  checkforWin = () => {
    const {listOfClickedEmojis} = this.state
    if (listOfClickedEmojis.length === 12) {
      this.setState({isGameinProcess: false})
    }
  }

  emojiClicked = id => {
    const getShuffledList = this.shuffledEmojisList()
    const {newEmojiList, listOfClickedEmojis} = this.state
    const alreadyClicked = listOfClickedEmojis.includes(id)
    if (!alreadyClicked) {
      this.setState(
        prevState => ({
          scoreCount: prevState.scoreCount + 1,
          listOfClickedEmojis: [...prevState.listOfClickedEmojis, id],
          newEmojiList: getShuffledList,
        }),
        this.checkforWin,
      )
    } else if (alreadyClicked) {
      console.log('you loose')
      this.setState({isGameinProcess: false})
    }
  }

  renderEmojies = () => {
    const {newEmojiList} = this.state
    return (
      <ul className="emojiImgContainer">
        {newEmojiList.map(each => (
          <EmojiCard
            key={each.id}
            details={each}
            emojiClicked={this.emojiClicked}
          />
        ))}
      </ul>
    )
  }

  handelreplay = () => {
    const {scoreCount, totalScoreCount} = this.state
    console.log('replay game is asdfo')
    this.setState({
      scoreCount: 0,
      listOfClickedEmojis: [],
      isGameinProcess: true,
    })
    if (scoreCount > totalScoreCount) {
      this.setState({totalScoreCount: scoreCount})
    }
  }

  renderResult = () => {
    const {scoreCount, listOfClickedEmojis} = this.state
    const isWon = listOfClickedEmojis.length === 12
    return (
      <WinOrLoseCard
        isWon={isWon}
        replay={this.handelreplay}
        scoreCount={scoreCount}
      />
    )
  }

  render() {
    const {newEmojiList, listOfClickedEmojis} = this.state
    const {scoreCount, isGameinProcess, totalScoreCount} = this.state

    console.log(newEmojiList)
    console.log(listOfClickedEmojis)
    return (
      <div className="mainContainer">
        <NavBar
          scoreCount={scoreCount}
          totalScoreCount={totalScoreCount}
          isGameinProcess={isGameinProcess}
        />
        <div className="contentContainer">
          {isGameinProcess ? this.renderEmojies() : this.renderResult()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
