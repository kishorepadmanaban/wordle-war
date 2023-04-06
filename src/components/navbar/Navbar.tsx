import {
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'
import { GAME_TITLE } from '../../constants/strings'
import '../reactions/reactions.css'
import BB_logo from '../assests/BB_logo.png'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
  createRoom: () => void
  roomId: string | null
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  setIsSettingsModalOpen,
  createRoom,
  roomId
}: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-content px-5">
        <InformationCircleIcon
          className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white info-icon"
          onClick={() => setIsInfoModalOpen(true)}
        />
        <p className="text-xl ml-2.5 font-bold dark:text-white text-wordle ">
          Wordle-War
        </p>
        <p className="text-xl ml-2.5 font-bold dark:text-white text-ww">W-W</p>
        <div
          className="dark:text-white mr-5 cursor:pointer right-text-dis-none"
          onClick={createRoom}
        >
          Create Room
        </div>
        <div className="right-icons">
        {
            <div className="dark:text-white mr-5 cursor:pointer" onClick={createRoom}>Create Room</div>
          }
          <InformationCircleIcon
            className="h-6 w-6 mr-2 cursor-pointer dark:stroke-white info-icon-mobile"
            onClick={() => setIsInfoModalOpen(true)}
          />
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          <CogIcon
            className="h-6 w-6 mr-3 cursor-pointer dark:stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
          />
          <span>
            <span>
              <a target={'_blank'} href="https://brownbutton.io/">
                <img className="logo" src={BB_logo} />
              </a>
            </span>
          </span>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
