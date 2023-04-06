import { useState, useEffect, useRef } from 'react'

function EmojiScreen(props) {
  const userid = localStorage.getItem('userId')
  const [emoji, setEmoji] = useState('')
  const [clicked, setClicked] = useState(false)
  const timeRef = useRef(null)

  const removeEmoji = () => {
    if (timeRef.current) {
      clearTimeout(timeRef.current)
    }
    timeRef.current = setTimeout(() => {
      setEmoji('')
      props.sendEmoji({})
    }, 1000)
  }

  const data = ['❤️', ' 😂', '👍', '🤔']

  return (
    <div className="emoji-container">
      <div className="emoji-list-wrapper">
        {data.map((item, index) => (
          <div className="emoji-list" key={index}>
            <button
              className="emoji-size-button"
              onClick={() => {
                props.sendEmoji({
                  Emoji: item,
                  userid: userid,
                })
                removeEmoji()
              }}
            >
              {item}
            </button>
            <div class="fly emoji-size">{clicked}</div>
          </div>
        ))}
      </div>

      <div className="emoji-keyboard"></div>
    </div>
  )
}

export default EmojiScreen
