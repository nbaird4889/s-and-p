import { useState, useEffect } from "react";

const Stocks = (props) => {
    const apiKey = "6aa97979d9feece39402f0b9bcf939b5";
    const Symbol = props.match.params.Symbol;
    const url = `https://financialmodelingprep.com/api/v3/profile/${Symbol}?apikey=${apiKey}`;

    const [ stock, setStock ] = useState(null);

    const getStock = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setStock(data);
    }

   
    useEffect(() => {
        getStock();
    }, []);

    const loaded = () => {
        return (
          <div className="intro" id="stock-div">
            <h2 className="stock-info">{stock[0].symbol}: {stock[0].companyName}</h2>
            <h2 className="stock-info">Price: ${stock[0].price}</h2>
            <h2 className="stock-info">Exchange: {stock[0].exchangeShortName}</h2>
            <h2 className="stock-info">Industry: {stock[0].industry}</h2>
            <p className="stock-info">{stock[0].description}</p>
            <a className="website" href={stock[0].website} target="_blank"><button className="button">Website</button></a>
          </div>
        );
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };
    
    return stock ? loaded() : loading();

  };
  
  export default Stocks;