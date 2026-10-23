
import CardHeader from '../CardHeader/CardHeader'
import Widgets from '../Widgets/Widgets'
import Divider from '../Divider/Divider'

import './card.scss'

const Card = () => {

    return (
        <div className="card">
            <Divider />
            <CardHeader />

            <Divider />
            <Widgets />
            
            <Divider />
        </div>
    )
}

export default Card