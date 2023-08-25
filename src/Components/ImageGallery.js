import React from "react";


const ImageGallary = ({images}) =>{
 
    return(
        <div>
               {
                images.map( (image) =>(
                    <img 
                       src={image.urls.thumb}
                       alt={image.alt_description}
                    />
                ))
               }
        </div>
    )
}

export default ImageGallary;