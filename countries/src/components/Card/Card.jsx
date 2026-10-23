
import CardHeader from '../CardHeader/CardHeader'
import Divider from '../Divider/Divider'

import './card.scss'

const Card = () => {

    return (
        <div className="card">
            <Divider />
            <CardHeader />
            <Divider />
            <div className="card__vidgets">
                <div className="card__vidgets-item">Item 1</div>
                <div className="card__vidgets-item">Item 2</div>
            </div>
        </div>
    )
}

export default Card