import { useEffect, useState } from "react";
import {Button} from "antd";
import {link} from "react-router-dom"

function prodCard({set}) {
    const {name , id , image} = set
    return (
        <div className="prod-card">
            <img src="https://picsum.photos/200" alt="img random" />
            <h3>{props.name}</h3>
            <button>Ver más</button>
       </div>
    )
}

export default ProdCard;

/**  https://coderhouse.zoom.us/rec/play/VIzkm0qZTUukx1G-gpTg5W7WPnuHa44WFOxl148S0krSrAtAUEkW9OOKI3BgFhRXsbvjyCA6ZB0q8Sm9.J3RuI67oRHjGCXMC?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fcoderhouse.zoom.us%2Frec%2Fshare%2FYHnbLTkGI_ZFVC_vVVdJoOildjffaCbZVO5kG7pzLeZmPz6nhf_8iXYtMIpBdSoe.D84DpNDxtiO4BGDY
18:16 */