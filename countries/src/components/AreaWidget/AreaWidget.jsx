
import Switch from '../Switch/Switch'

import './areaWidget.scss'

const AreaWidget = () => {

    return (
        <div className="area">
            <div className="area__header">
                <div className="area__icon">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_23_4)">
                            <path d="M12.5005 6.25046C12.5005 9.37163 9.0387 12.6222 7.87622 13.6261C7.76792 13.7076 7.6361 13.7516 7.5006 13.7516C7.36511 13.7516 7.23328 13.7076 7.12498 13.6261C5.96251 12.6222 2.5007 9.37163 2.5007 6.25046C2.5007 4.92415 3.02748 3.65216 3.96514 2.71432C4.9028 1.77647 6.17455 1.2496 7.5006 1.2496C8.82666 1.2496 10.0984 1.77647 11.0361 2.71432C11.9737 3.65216 12.5005 4.92415 12.5005 6.25046ZM9.37556 6.25046C9.37556 7.28617 8.53611 8.12579 7.5006 8.12579C6.46509 8.12579 5.62564 7.28617 5.62564 6.25046C5.62564 5.21475 6.46509 4.37514 7.5006 4.37514C8.53611 4.37514 9.37556 5.21475 9.37556 6.25046Z" stroke-width="1.6" stroke-linecap="round" stroke="#747580" />
                        </g>
                        <defs>
                            <clipPath id="clip0_23_4">
                            <rect width="15.0012" height="15.0012" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="area__title">Area of the country</div>
            </div>
            <div className="area__widget">
                <div className="area__unit">km² / mi²</div>
                <Switch />
                <div className="area__value">30528</div>
            </div>
        </div>
    )
}

export default AreaWidget