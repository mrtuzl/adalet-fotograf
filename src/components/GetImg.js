import { useState, useEffect } from "react";
import React from "react";
import Image from "./Image";

export default function GetImg() {

    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async() => {
            const response = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_API_KEY}`)
            const data = await response.json()
            setImages(data)
        }
        fetchImages()
    },[])

    return (    
        <> 
        <div> 
                {
                    images.map((img) => (
                        <Image key={img.id} {...img}
                        />
                    ))
                }
        </div>
        
            <h1> {images.length} </h1>
        </>
    )
}