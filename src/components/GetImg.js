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
        <div className="container-wrap cards">
            <div className="row">
                {
                    images.map((img) => (
                        <div key={img.id} className="col-lg-3 col-md-6 col-sm-12 mb-3">
                            <Image {...img} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
