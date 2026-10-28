

import './filteredList.scss';

const FilteredList = ({translation, style}) => {
    return (
        <ul className={`filteredList ${style ? 'list-active' : ''}`}>
            {Object.entries(translation).map(([country, leng], i) => (
                
                    <li className="filteredList__item" key={i+1}>
                        <div className="filteredList__country">{country}</div>
                        <div className="filteredList__language">{leng.common}</div>
                    </li>
                
            ))}
        </ul>
    )
}

export default FilteredList