

import './counter.scss';

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter__button counter__button-minus">–</button>
            <div className="counter__value">0</div>
            <button className="counter__button counter__button-plus">+</button>
        </div>
    )
}

export default Counter