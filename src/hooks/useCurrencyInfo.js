import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency])) //pulling currency as response , url me jo value h wahi currency ki value data me bhi rhegi
        console.log(data);
    }, [currency]) //dependency array for side effects
    console.log(data);
    return data
}

export default useCurrencyInfo;