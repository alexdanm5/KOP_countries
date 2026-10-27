
import CardHeader from '../CardHeader/CardHeader'
import Widgets from '../Widgets/Widgets'
import ListWidget from '../ListWidget/ListWidget'
import Divider from '../Divider/Divider'

import './card.scss'

const Card = ({country}) => {

    return (
        <div className="card">
            <CardHeader countryHeader={country}/>

            <Divider />
            <Widgets widgets={country}/>
            
            <Divider />
            <ListWidget list={country}/>
        </div>
    )
}

export default Card