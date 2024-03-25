import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FcLike } from "react-icons/fc";


export default function Modal({ isOpen, selectedImageUrl, altDescription, handleClose, props }) {
    console.log(props)
    return (
        <>
            {isOpen && (
                <div className="modal fade show" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{display: 'inline-block'}}>
                    <div className="modal-dialog modal-xs">
                        <div className="modal-content">
                            <div className="modal-header p-0">
                                <div className="text-center w-50 border-end border-1 p-2 social"> <FaWhatsapp color="#25D366" size={30}/> </div>
                                <div className="text-center w-50 border-end border-start border-1 p-2 social"> <FaTwitter color="#1DA1F2" size={30}/> </div>
                                <div className="text-center w-50 border-start border-1 p-2 social"> <FaFacebook color="#1877F2" size={30}/> </div>
                                <button type="button" className="btn-close bg-dark" onClick={handleClose} aria-label="Close"></button>
                            </div>
                            <div className="modal-body p-0">
                                <img src={selectedImageUrl} alt={altDescription} className="card-img-top img-fluid"/> 
                            </div>
                            <div className="modal-footer d-flex justify-content-between p-2">
                                <div className="d-flex align-items-center justify-content-center"> 
                                    <p className="fw-bold text-uppercase mx-2"> {props.user.name} </p>
                                    <p> <FaInstagram color="purple"/> {props.user.instagram_username}</p> 
                                </div>
                                <div className="d-flex align-items-center justify-content-center"> 
                                    <button type="button" className="btn btn-dark">Beğen</button>
                                    <button type="button" className="btn btn-light border border-1 shadow-sm mx-2">  <FcLike className="mx-1" size={20}/> {props.likes} Beğeni </button> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
