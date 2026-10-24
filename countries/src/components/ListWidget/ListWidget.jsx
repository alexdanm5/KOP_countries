
import Categories from '../Categories/Categories';
import FilteredList from '../FilteredList/FilteredList';
import './listWidget.scss';

const ListWidget = () => {

    return(
        <div className="listWidget">
            <div className="listWidget__title">Belgium in Different Languages</div>

            <div className="listWidget__categories">
                <Categories />
            </div>
            <div className="listWidget__filteredList">
                <FilteredList />
            </div>
        </div>
    )
}

export default ListWidget