import { CiCalendarDate } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

export default function Image(props) {
    const date = new Date(props.user.updated_at);
    const formattedDate = date.toLocaleDateString('tr-TR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    return (
        <>
        <div className="card m-3 shadow">
        <img src={props.urls.small} alt={props.alt_description} className="card-img-top"/> 
                <div className="card-body">
                    <p className="fw-bold text-uppercase text-center">  <img className="imd-fluid rounded-circle" src={props.user.profile_image.small} alt={props.alt_description}/>  {props.user.name} </p>
                    <p className="text-center d-flex justify-content-center align-items-center"> <CiCalendarDate size={18}/> {formattedDate}</p>
                    <div className="d-flex align-items-center justify-content-around"> 
                        <p> <FaInstagram color="purple"/> {props.user.instagram_username}</p>
                        <p className="d-flex align-items-center"> <FcLike className="mx-1" size={15}/> {props.likes}</p>
                    </div>
                </div>
        </div>
        
        
        </>
    )
}