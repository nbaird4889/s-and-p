import { useState, useEffect } from "react";

const Stocks = (props) => {
    const apiKey = "6aa97979d9feece39402f0b9bcf939b5";
    const symbol = props.match.params.symbol;
    const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${apiKey}`;

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
          <div>
            <h1>{stock[0].symbol}</h1>
            <h2>{stock[0].price}</h2>
          </div>
        );
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };
    
    return stock ? loaded() : loading();

  };
  
  export default Stocks;