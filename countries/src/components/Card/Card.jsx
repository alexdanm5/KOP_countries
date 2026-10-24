
import CardHeader from '../CardHeader/CardHeader'
import Widgets from '../Widgets/Widgets'
import ListWidget from '../ListWidget/ListWidget'
import Divider from '../Divider/Divider'

import './card.scss'

const Card = () => {

    return (
        <div className="card">
            <CardHeader />

            <Divider />
            <Widgets />
            
            <Divider />
            <ListWidget />
        </div>
    )
}

export default Card