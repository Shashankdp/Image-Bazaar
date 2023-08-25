import React, { useEffect, useState } from "react";
import axios from "axios";


//Note: Access .env
console.log("Key is",process.env.REACT_APP_ACCESS_KEY);

const SearchBar = ({setImages}) => {

    const [searchTerm,setSearchTerm] = useState("nature");
    
    useEffect(()=>{
        fetchImage()
    },[])

    function fetchImage(){
        searchTerm && 
        axios.get("https://api.unsplash.com/search/photos",{
            params:{
                client_id: `${process.env.REACT_APP_ACCESS_KEY}`,    
                query: searchTerm
            }
        })
        .then((response)=>{
            setImages(response.data.results)
            setSearchTerm("");
        })
        .catch((err)=>console.log(err));
    }


    return (
        <div>
             <input type="text" placeholder="Search for an image..." onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm}></input>
             <button onClick={fetchImage}>Search</button>
        </div>
    )
}

export default SearchBar;