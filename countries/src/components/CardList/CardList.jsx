import dataCards from '../../assets/data.json'
import Card from '../Card/Card'

import './cardList.scss'

const CardList = () => {

    return (
        <div className="widgetsLayout">
            {dataCards.map(item => (
                <Card key={item.id} country={item}/>
            ))}
            
        </div>
    )
}

export default CardList