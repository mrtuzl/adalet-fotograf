import yuzyilLogo from "../img/100yillogo.png";
import yuzLogo from "../img/100logo.png";
import adaletLogo from "../img/adaletlogo.png";
import logo from "../img/logo.png";
import banner from "../img/banner.png";
import { FaTrophy } from "react-icons/fa6";


export default function Header() {


    return (    
        <> 
        <header className="container-fluid bg">
            <div className="d-flex flex-column header"> 
                    <div className="d-flex p-3 align-items-center logos"> 
                        <div className="m-3 d-inline"> 
                         <img src={yuzyilLogo} alt="100. Yıl Logo" className="logo m-1"/>
                         <img src={yuzLogo} alt="100. Yıl Logo" className="logo m-1"/> 
                         </div>
                        <div className="d-inline"> 
                        <img src={adaletLogo} alt="Adalet Logo" className="logo p-3"/> 
                        <img src={logo} alt="Personel Logo" className="logo m-1"/> 
                        </div>
                    </div>
                    <div className="d-flex justify-content-center"> 
                    <img src={banner} alt="banner" className="banner"/>
                    </div>
            </div>
            <div className="box bg-white d-flex justify-content-center p-1 my-3 rounded-3"> 
                    <div className="p-2 mostlike d-flex align-items-center justify-content-center rounded-2"> 
                        <div className="rounded-5 bg-danger border border-1 border-white text-center p-2"> 
                            <FaTrophy size={25}/> 
                        </div>
                        <span className="mx-1 d-flex fs-5"> En çok beğeni alan <span className="bg-danger rounded-2 px-1 mx-1"> 10 </span> fotoğraf </span>
                    </div>
            </div>
        </header>
        </>
    )
}