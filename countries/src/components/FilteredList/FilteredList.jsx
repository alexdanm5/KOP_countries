

import './filteredList.scss';

const FilteredList = ({country}) => {
    
    let index = 1;
    return (
        <ul className="filteredList">
            {Object.entries(country).map(([country, leng]) => (
                
                    <li className="filteredList__item" key={index++}>
                        <div className="filteredList__country">{country}</div>
                        <div className="filteredList__language">{leng}</div>
                    </li>
                
            ))}
        </ul>
    )
}

export default FilteredList