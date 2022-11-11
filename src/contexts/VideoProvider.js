import React, { useState } from "react";

export const VideoContext = React.createContext({})

export default function VideoProvider(props) {
    const [videoInfo, setVideoInfo] = useState({})

    const getVideo = (video) =>{
        setVideoInfo(video)
    }

    return (
        <VideoContext.Provider value={{ videoInfo, getVideo} }>
            {props.children}
        </VideoContext.Provider>
    );
}