
export default function Image(props) {
    return (
        <>
        <div class="card m-3">
        <img src={props.urls.small} alt={props.alt_description} className="card-img-top"/> 
                <div class="card-body">
                <div> kullanıcı adı: {props.user.name} </div>
                <p> yüklenme tarihi:{props.user.updated_at}</p>
                <p> likes: {props.likes}</p>
                <img src={props.user.profile_image.small} alt={props.alt_description}/> 
                <p> instagram: {props.user.instagram_username}</p>
                </div>
        </div>
        
        
        </>
    )
}