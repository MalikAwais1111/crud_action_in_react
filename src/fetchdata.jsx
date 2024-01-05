 import { useState, useEffect } from "react";

 const useFetch = (url)=>{
    const [isPending,setisPending] = useState(true);
    const [error,seterror] = useState(false);
    const [data, setdata] = useState('');
    useEffect(()=>{
        const AbortCRTL = new AbortController();
        setTimeout(() => {
            fetch(url,{ signal: AbortCRTL.signal})
            .then(res =>{
                if(!res.ok){
                    throw Error("Couldn't fetch data")
                    
                }
                return res.json();
            })
            .then(data =>{
                setdata(data);
                setisPending(null);
                seterror(null);
            })  
            .catch(err =>{
                if(err.name === "AbortError"){
                    console.log('Cleared');
                }
                else{
                    setisPending(null);
                    seterror(err.message);
                }
                
            })
        }, 1000);

        return () => AbortCRTL.abort();

    },[url])
    return { data ,isPending, error};
    }

    export default useFetch;