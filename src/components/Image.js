import { CiCalendarDate } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { useState } from "react";
import Modal from "./Modal";


export default function Image(props) {
    const date = new Date(props.user.updated_at);
    const formattedDate = date.toLocaleDateString('tr-TR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });

    const [isModalOpen, setIsModalOpen] = useState(false); 
    const [selectedImageUrl, setSelectedImageUrl] = useState(null); 

   
    const handleOpenModal = (imageUrl) => {
        setSelectedImageUrl(imageUrl); 
        setIsModalOpen(true); 
    };

 
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="card my-3 shadow" onClick={() => handleOpenModal(props.urls.regular)}>
                <img src={props.urls.small} alt={props.alt_description} className="card-img-top"/> 
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <p className="fw-bold text-uppercase text-center">
                        <img className="imd-fluid rounded-circle" src={props.user.profile_image.small} alt={props.alt_description}/>  
                        {props.user.name}
                    </p>
                    <p className="text-center d-flex justify-content-center align-items-center"> 
                        <CiCalendarDate size={18}/> {formattedDate}
                    </p>
                    <div className="d-flex align-items-center justify-content-around w-50"> 
                        <p> <FaInstagram color="purple"/> {props.user.instagram_username}</p>
                        <p className="d-flex align-items-center"> <FcLike className="mx-1" size={15}/> {props.likes}</p>
                    </div>
                </div>
            </div>

            <Modal 
                isOpen={isModalOpen} 
                selectedImageUrl={selectedImageUrl} 
                altDescription={props.alt_description} 
                handleClose={handleCloseModal}
                props={props}
            />

        </>
    );
}