// import React, { useState, useRef, useEffect } from 'react'
// import '../reactions/reactions.css'

// function EmojiKeyboard(props) {
//   const userid = localStorage.getItem('userId')
//   // const [clicked, setClicked] = useState(false)
//   const [showEmojiList, setShowEmojiList] = useState(false)
//   const [emoji, setEmoji] = useState('')
//   const timeRef = useRef(null)

//   function toggleEmojiList() {
//     setShowEmojiList(!showEmojiList)
//   }
//   const removeEmoji = () => {
//     if (timeRef.current) {
//       clearTimeout(timeRef.current)
//     }
//     timeRef.current = setTimeout(() => {
//       setEmoji('')
//       props.sendEmoji({})
//     }, 1000)
//   }
//   console.log('emoji', props.sendEmoji)
//   const data = ['❤️', ' 😂', '👍', '🤔']

//   return (
//     <div className="emoji-keyboard">
//       <button className="emoji-button" onClick={toggleEmojiList}>
//         😃
//       </button>

//       {showEmojiList && (
//         <div className="emoji-list-keyboard">
//           {data.map((item, index) => (
//             <div className="emoji-keys" key={index}>
//               <button
//                 className="emoji-size-button"
//                 onClick={() => {
//                   props.sendkey({
//                     Emoji: item,
//                     userid: userid,
//                   })
//                   removeEmoji()
//                 }}
//               >
//                 {item}
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default EmojiKeyboard
