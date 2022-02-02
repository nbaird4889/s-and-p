import { Link } from "react-router-dom"

function Intro() {
    return (
        <div className="intro">
             <div className="image">
             <h2 className="intro-header">Everything you need to know about the S&P 500</h2>
            </div>
            <p className="para-intro">
                The Standard and Poor's 500, or the S&P 500, is a stock market index tracking the performance of 
                500 large companies listed on stock exchanges. It is one of the most commonly followed equity indices. 
                As of December 31, 2020, more than $5.4 trillion was invested in assets tied to the performance of the index. 
                The S&P 500 index is a free-float weighted/capitalization-weighted index. 
                
            </p>
            <p className="para-intro">
                In 2017, companies in the index derived on average 72% of their revenue in the United States.
                The index is one of the factors in computation of the Conference Board Leading Economic Index, used to forecast the direction of the economy.
                The S&P 500 is maintained by S&P Dow Jones Indices, a joint venture majority-owned by S&P Global, and its components are selected by a committee
            </p>  

            <p className="para-intro">
                Head on over to the dashboard to checkout all the stocks on the S&P 500 and details for each.
            </p> 
            <div className="button-div">
            <Link to="/dashboard">
                <button className="button">Stock Dashboard</button>
            </Link>
            </div>
        </div>
    )
}

export default Intro