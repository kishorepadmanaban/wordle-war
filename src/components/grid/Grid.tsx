import { MAX_CHALLENGES } from '../../constants/settings'
import EmojiScreen from '../reactions/emoji'
import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'
import '../reactions/reactions.css'

type Props = {
  guesses: string[]
  currentGuess?: string
  isRevealing?: boolean
  currentRowClassName: string
  onlyColors?: boolean
  name: string
}

export const Grid = ({
  guesses,
  currentGuess,
  isRevealing,
  currentRowClassName,
  onlyColors,
  name,
}: Props) => {
  const empties =
    guesses.length < MAX_CHALLENGES - 1
      ? Array.from(Array(MAX_CHALLENGES - 1 - guesses.length))
      : []
  return (
    <>
      <div className="text-gray-500 dark:text-gray-300 mt-2 text-center text-3xl capitalize mb-5">
        {name}
      </div>

      <div className="parent-div">
        <div className="grid-cnct">
          {guesses.map((guess, i) => (
            <>
              <div>
                <CompletedRow
                  key={i}
                  guess={guess}
                  isRevealing={isRevealing && guesses.length - 1 === i}
                  onlyColors={onlyColors}
                />
              </div>
            </>
          ))}
          {guesses.length < MAX_CHALLENGES && (
            <CurrentRow
              guess={currentGuess}
              className={currentRowClassName}
              onlyColors={onlyColors}
            />
          )}
          {empties.map((_, i) => (
            <EmptyRow key={i} />
          ))}
        </div>
      </div>
    </>
  )
}
