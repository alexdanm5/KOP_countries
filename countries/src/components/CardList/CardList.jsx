import {useState, useEffect} from 'react';
import useCountriesService from '../../services/CountriesService'

import dataCards from '../../assets/data.json'
import Card from '../Card/Card'

import './cardList.scss'

const CardList = () => {
    const [countriesList, setCountriesList] = useState([]);
    const [newItemLoading, setnewItemLoading] = useState(false);
    const [offset, setOffset] = useState(0);

    const {loading, error, getAllCountries} = useCountriesService();

    useEffect(() => {
        onRequest(offset, true);
    }, [])

    const onRequest = (offset, initial) => {
        // initial ? setnewItemLoading(false) : setnewItemLoading(true);
        getAllCountries(offset)
            .then(onCountriesListLoaded)

    }

    const onCountriesListLoaded = (newCountriesList) => {
        // let ended = false;
        // if (newComicsList.length < 8) {
        //     ended = true;
        // }
        setCountriesList([...countriesList, ...newCountriesList]);
        console.log(countriesList);
        // setnewItemLoading(false);
        // setOffset(offset + 8);
        // setComicsEnded(ended);
    }

    return (
        <div className="widgetsLayout">
            {countriesList.map((item, i) => (
                <Card key={i} country={item}/>
            ))}
            
        </div>
    )
}

export default CardList