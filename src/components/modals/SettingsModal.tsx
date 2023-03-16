import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'
import {
  HARD_MODE_DESCRIPTION,
  HIGH_CONTRAST_MODE_DESCRIPTION,
} from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
  isHardMode: boolean
  handleHardMode: Function
  isDarkMode: boolean
  handleDarkMode: Function
  isHighContrastMode: boolean
  handleHighContrastMode: Function
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  name: string
}

export const SettingsModal = ({
  isOpen,
  handleClose,
  isHardMode,
  handleHardMode,
  isDarkMode,
  handleDarkMode,
  isHighContrastMode,
  handleHighContrastMode,
  name,
  onNameChange
}: Props) => {
  return (
    <BaseModal title="Settings" isOpen={isOpen} handleClose={handleClose}>
      <div className="flex flex-col mt-2 divide-y">
        <SettingsToggle
          settingName="Hard Mode"
          flag={isHardMode}
          handleFlag={handleHardMode}
          description={HARD_MODE_DESCRIPTION}
        />
        <SettingsToggle
          settingName="Dark Mode"
          flag={isDarkMode}
          handleFlag={handleDarkMode}
        />
        <SettingsToggle
          settingName="High Contrast Mode"
          flag={isHighContrastMode}
          handleFlag={handleHighContrastMode}
          description={HIGH_CONTRAST_MODE_DESCRIPTION}
        />
        <div className="flex justify-between gap-4 py-3">
          <div className='text-gray-500 dark:text-gray-300 mt-2 text-left'>Name:</div>
          <input name="name" type="text" onChange={onNameChange} className="form-control" value={name} />
        </div>
      </div>
    </BaseModal>
  )
}
