import axios from "axios"
import {useEffect, useState} from  "react"


function useFetch (url){
    const [isLoading, setIsloading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [data, setData] = useState([])
    console.log(data ,"fetched data ");

  
    const getRequest=()=>{
        setIsloading(true)
        axios.get(url)
        .then(res=>{setData(res.data)})
        .catch(err=>{setIsError(true)})
        .finally(()=>{
            setIsloading(false)
        }) 
    }


    useEffect(() => {
        getRequest()
        
    }, [url])
return {isLoading , isError , data}
}


const useDebouncer= (query, delay)=>{
    const [debouncedQuery, setDebouncedQuery] = useState(query)

    useEffect(()=>{
        const handler = setTimeout(() => {
            setDebouncedQuery(query)
        }, delay);
        return()=>{
            clearTimeout(handler)
        }
    },[query,delay])
    return debouncedQuery;
}


export {useFetch , useDebouncer}