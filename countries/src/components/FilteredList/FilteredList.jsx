import Devider from '../Divider/Divider';

import './filteredList.scss';

const FilteredList = () => {
    return (
        <ul className="filteredList">
            <li className="filteredList__item">
                <div className="filteredList__country">FR</div>
                <div className="filteredList__language">Language 1</div>
            </li>
            <Devider />
            <li className="filteredList__item">
                <div className="filteredList__country">FR</div>
                <div className="filteredList__language">Language 1</div>
            </li>
            <Devider />
            <li className="filteredList__item">
                <div className="filteredList__country">FR</div>
                <div className="filteredList__language">Language 1</div>
            </li>
            <button className="filteredList__btn">Show more</button>
        </ul>
    )
}

export default FilteredList