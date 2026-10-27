import { useState } from 'react';
import Counter from '../Counter/Counter';

import './neighbourWidget.scss';

const NeighbourWidget = ({borders}) => {
    const [count, setCount] = useState(0);

    const changeNextNeighbour = () => {
        if (count < borders.length - 1) {
            setCount(count + 1);
        }
        
    }

    const changePrevNeighbour = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    let currentBorder = borders[count];

    if (!borders || borders.length === 0) {
        currentBorder = "No borders";
    }
    return (
        <div className="widget">
            <div className="widget__header">
                <div className="widget__icon">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 4.5L6.75 2.25L11.25 4.5L15.75 2.25V13.5L11.25 15.75L6.75 13.5L2.25 15.75V4.5Z" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke="#747580" />
                    <path d="M6.75 2.25V13.5M11.25 4.5V15.75" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke="#747580" />
                    </svg>
                </div>
                <div className="widget__title">Neighbouring countries</div>
            </div>
            <div className="widget__content">
                <Counter onPrev={changePrevNeighbour} 
                         onNext={changeNextNeighbour} 
                         isActivNeighbour={currentBorder} 
                />
            </div>
        </div>
    )
}

export default NeighbourWidget