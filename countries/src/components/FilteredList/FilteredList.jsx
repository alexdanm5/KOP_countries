

import './filteredList.scss';

const FilteredList = ({country}) => {
    
    return (
        <ul className="filteredList">
            {Object.entries(country).map(([country, leng], i) => (
                
                    <li className="filteredList__item" key={i+1}>
                        <div className="filteredList__country">{country}</div>
                        <div className="filteredList__language">{leng}</div>
                    </li>
                
            ))}
        </ul>
    )
}

export default FilteredList