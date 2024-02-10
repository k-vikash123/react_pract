import { useState } from "react";

const useResData = () => {
    const [onlineStatus,setOnlineStatus] = useState(true);
    window.addEventListener("offline",()=>{
        setOnlineStatus(false);
    })
    return onlineStatus;
}

export default useResData;