import { useEffect, useState } from "react";
import ProdCard from "./ProdCard";

function ItemDetailContainer () {

    const [sets, setSets] = useState ([])

    useEffect (() => {

        fetch ("/data.json")
        .then ((res) => {
            return res.json () 
        })
        .then((res) => {
            setSets(res.results)
        } )
        
    )
    }, 
    return(
        <>
            {sets.map ((set)=> {
                return <ProdCard key={set.}
            })}
        </>
    )
} 
