import {useEffect,useState}from "react"

function useCurrencyInfo(currency){
    const [data,setdata]=useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/7ddb7e739aba2f6b703e14ae/latest/${currency}`)
        .then((res)=>res.json())
        .then((res)=>setdata(res.conversion_rates))
    },[currency])
    return data
}
export default useCurrencyInfo;