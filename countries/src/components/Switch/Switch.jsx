

import './switch.scss'

const Switch = ({ isActive, onClick }) => {

    return (
        <div className={`switch ${isActive ? 'switch-active' : ''}`}
            onClick={onClick}
        >
            <div className="switch__round"></div>
        </div>
    )
}

export default Switch