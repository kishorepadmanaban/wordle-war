import { MAX_CHALLENGES } from '../../constants/settings'
import { CompletedRow } from './CompletedRow'
import { CurrentRow } from './CurrentRow'
import { EmptyRow } from './EmptyRow'

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
  // console.log('guesses', guesses);
  return (
    <>
      <div className="text-gray-500 dark:text-gray-300 mt-2 text-center text-3xl capitalize mb-5">{name}</div>
      {guesses.map((guess, i) => (
        <CompletedRow
          key={i}
          guess={guess}
          isRevealing={isRevealing && guesses.length - 1 === i}
          onlyColors={onlyColors}
        />
      ))}
      {guesses.length < MAX_CHALLENGES && (
        <CurrentRow guess={currentGuess} className={currentRowClassName} onlyColors={onlyColors} />
      )}
      {empties.map((_, i) => (
        <EmptyRow key={i} />
      ))}
    </>
  )
}
