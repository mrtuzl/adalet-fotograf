import { useState, useEffect } from "react";
import React from "react";
import Image from "./Image";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";



export default function GetImg() {
    const [images, setImages] = useState([]);
    const [follow, setFollow] = useState(true);

    useEffect(() => {
        const fetchImages = async() => {
            const response = await fetch(`https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_API_KEY}`)
            const data = await response.json()
            setImages(data)
        }
        fetchImages()
    },[])

    return (    
        <div className="container-fluid p-3 cards">
            <div className="row p-3">
                {
                    images.map((img) => (
                        <div key={img.id} className="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center">
                            <Image {...img} />
                        </div>
                    ))
                }
                
               <div className={`position-fixed bottom-0 end-0 p-0 bg-white shadow-lg rounded m-1 follow ${follow ? 'hide' : 'show'}`}>
                    <div className="border border-1 p-2 d-flex justify-content-center align-items-center" 
                     onClick={() => setFollow(!follow)}> <span className="fw-bold"> Bizi takip edin </span> </div>
                    <div className="border border-1 p-2 d-flex justify-content-center align-items-center"> <span className="fw-bold"> <FaPhone className="mx-1"/> 0312 414 63 27 </span> </div>
                    <div className="border border-1 p-2 d-flex justify-content-center align-items-center"> <span> <FaInstagram color="#833ab4" size={20} className="mx-1"/> @AdaletPGM </span> </div>
                    <div className="border border-1 p-2 d-flex justify-content-center align-items-center"> <span> <FaTwitter color="#1DA1F2" size={20} className="mx-1"/> @AdaletPGM </span> </div>
                    <div className="border border-1 p-2 d-flex justify-content-center align-items-center"> <span> <FaFacebook color="#1877F2" size={20} className="mx-1"/> @AdaletPGM </span> </div>
               </div>
               <div className={`position-fixed bottom-0 end-0 p-0 bg-white shadow-lg rounded m-1 follow ${follow ? 'show' : 'hide'}`}>
                    <div className="border border-1 p-2 d-flex justify-content-center align-items-center"
                    onClick={() => setFollow(!follow)}> <span className="fw-bold mx-2"> Bizi takip edin </span> <FaArrowUp/> </div>
                </div>
            </div>
        </div>
    )
}
