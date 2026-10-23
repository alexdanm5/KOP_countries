
import './cardHeader.scss'

const CardHeader = () => {
    
    return (
        <div className="info">
            <div className="info__header">
                <h3 className="info__region">Europe</h3>
                <div className="info__flag">
                    <img src="https://flags.restcountries.com/v5/svg/be.svg" alt="flag" />
                </div> 
            </div>

            <div className="info__general">
                <h2 className="info__name">Belgium</h2>
                <div className="info__description">
                    Belgium is a monarchy with Brussels as its capital, host to the main institutions of the European Union and NATO. Dutch, French and German are the official languages, the euro is the currency, and chemicals, medicines and port trade lead exports.
                </div>
            </div>
            
            <div className="info__data">
                <div className="info__gini">
                    <div className="info__gini-arrow">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.9162 9.9162V4.0838H4.0838M9.9162 4.0838L4.0838 9.9162" stroke-width="1.8" stroke-linecap="round" stroke="#187452" />
                        </svg>
                    </div>
                    <div className="info__gini-value">+3,2</div>
                </div>
                <div className="info__years">gini cofficiente in 2023</div>
            </div>
        </div>
    )
        
    
}

export default CardHeader