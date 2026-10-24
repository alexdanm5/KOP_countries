

import './counter.scss';

const Counter = ({ onPrev, onNext, isActivNeighbour }) => {
    return (
        <div className="counter">
            <button className="counter__button counter__button-minus" onClick={onPrev}>–</button>
            <div className="counter__value">{isActivNeighbour}</div>
            <button className="counter__button counter__button-plus" onClick={onNext}>+</button>
        </div>
    )
}

export default Counter