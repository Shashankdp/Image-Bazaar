import React, {useState} from "react";
import SearchBar from "./Components/SearchBar";
import ImageGallary from "./Components/ImageGallery";

const App = () => {
    const [images,setImages] = useState([]);
   
    return(
        <div>
             <SearchBar setImages={setImages}></SearchBar>
             <ImageGallary images={images}></ImageGallary>
        </div>
    )
}

export default App;