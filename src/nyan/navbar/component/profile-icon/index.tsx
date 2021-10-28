import { profileIcon } from '../../config'

import type { ProfileIconComponent } from './types'

const { size, fallbackColor } = profileIcon

const ProfileIcon: ProfileIconComponent = ({
    src,
    className = '',
    ...props
}) => {
    return (
        <button
            className={`h-full ${size} ${fallbackColor} rounded-full overflow-hidden ${className}`}
            type="button"
            {...props}
        >
            <img src={src} alt="Profile" className={`${size} object-cover`} />
        </button>
    )
}

export default ProfileIcon
