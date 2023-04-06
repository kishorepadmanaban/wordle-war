import React from 'react'
import { useState, useEffect } from 'react'
import '../reactions/reactions.css'

function FlyEmoji(props) {
  const userid = localStorage.getItem('userId')
  const [emoji, setEmoji] = useState('')
  const handleEmojiClick = (data) => {
    if (data !== '') {
      const emojis = [data]
      const newEmoji = emojis[Math.floor(Math.random() * emojis.length)]
      setEmoji(newEmoji)
    }
   
  }
  useEffect(() => {
    if (
      props.emojiData.emoji.userid !== userid &&
      props.emojiData.emoji.userid?.length > 0
    ) {
      handleEmojiClick(props.emojiData.emoji.Emoji)
    } else {
      setEmoji('')
    }
  }, [props.emojiData])

  return (
    <div>
      <div className="fly-wrapper">
        <div class="fly emoji-size" id="emoji1">
          {emoji}
        </div>
        <div class="fly emoji-size" id="emoji2">
          {emoji}
        </div>
        <div class="fly emoji-size" id="emoji3">
          {emoji}
        </div>
        <div class="fly emoji-size" id="emoji4">
          {emoji}
        </div>
        <div class="fly emoji-size" id="emoji5">
          {emoji}
        </div>
        <div class="fly emoji-size" id="emoji6">
          {emoji}
        </div>
        <div class="fly emoji-size" id="emoji7">
          {emoji}
        </div>
        <div class="fly emoji-size" id="emoji8">
          {emoji}
        </div>
        <div class="fly emoji-size" id="emoji9">
          {emoji}
        </div>
        <div class="fly emoji-size" id="emoji10">
          {emoji}
        </div>
        <div class="fly emoji-size" id="emoji11">
          {emoji}
        </div>
        <div class="fly emoji-size" id="emoji12">
          {emoji}
        </div>
        <div class="fly emoji-size" id="emoji13">
          {emoji}
        </div>
        <div class="fly emoji-size" id="emoji14">
          {emoji}
        </div>
        <div class="fly emoji-size" id="emoji15">
          {emoji}
        </div>
        <div class="fly emoji-size" id="emoji16">
          {emoji}
        </div>
      </div>
    </div>
  )
}
export default FlyEmoji
