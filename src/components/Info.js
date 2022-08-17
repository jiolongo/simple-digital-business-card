import React from "react"
import ProfileImage from '../images/formal.png'

export default function Info(){
    return(
        <>  
            <div className="info-container">
                <img src={ProfileImage} className="info-image" />
                
                <div className="info-details-name"> Jiolo Miles Ngo</div>
                <div className="info-details-profession">Frontend Developer</div>
                <div className="info-details-email">jiolomilesngo001@gmail.com</div>
                <a href="https://mail.google.com"><button className="info-button email"><i class="fa-solid fa-envelope"></i> Email</button></a>
                <a href="https://github.com/jiolongo">   <button className="info-button linkedin"><i class="fa-brands fa-linkedin"></i> LinkedIn</button></a>
               
            </div>
        </>
        
    )
}


