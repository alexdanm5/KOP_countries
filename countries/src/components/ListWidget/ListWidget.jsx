import { useState } from 'react';

import Categories from '../Categories/Categories';
import FilteredList from '../FilteredList/FilteredList';
import './listWidget.scss';

const ListWidget = ({list}) => {

    const {translation} = list;

    const [translationList, setTranslationList] = useState(translation);


    const sortByCountryNameAZ = () => {
        const sortedObj = Object.keys(translation)
            .sort() 
            .reduce((acc, key) => {
                acc[key] = translation[key];
                return acc; 
            }, {});
            
        setTranslationList(sortedObj);
    }

    const sortByCountryZA = () => {
        const sortedObj = Object.keys(translation)
            .sort()      
            .reverse()   
            .reduce((acc, key) => {
                acc[key] = translation[key];
                return acc;
            }, {});
        setTranslationList(sortedObj);
    }

    return(
        <div className="listWidget">
            <div className="listWidget__title">{list.name} in Different Languages</div>

            <div className="listWidget__categories">
                <Categories onSortAToZ={sortByCountryNameAZ} onSortZToA={sortByCountryZA}/>
            </div>
            <div className="listWidget__filteredList">
                <FilteredList country={translationList} />
            </div>
        </div>
    )
}

export default ListWidget