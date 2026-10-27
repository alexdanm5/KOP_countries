
import AreaWidget from '../AreaWidget/AreaWidget'
import NeighbourWidget from '../NeighbourWidget/NeighbourWidget'

import './widgets.scss'

const Widgets = ({widgets}) => {
    const {area, borders} = widgets;
    return (
        <div className="widgets">
            <AreaWidget area={area}/>
            <NeighbourWidget borders={borders}/>
        </div>
    )
}

export default Widgets