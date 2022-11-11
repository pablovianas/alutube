import React, { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { ColorModeContext } from "../src/contexts/ColorMode";
import { VideoContext } from "../src/contexts/VideoProvider";
import { Header } from "../src/components/Header";
import styled from "styled-components";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Video() {
    const [isLoading, setLoading] = useState(true)
    const router = useRouter()
    const contexto = React.useContext(ColorModeContext);
    const context = React.useContext(VideoContext)
    const openedVideo = context.videoInfo

    useEffect(()=>{
        if(Object.keys(openedVideo).length === 0){
            router.push('/')
        }else{
            setTimeout(() => {
                setLoading(false)
            }, 2000)
        }
    },[])


    return (
        <>
            {!isLoading && Object.keys(openedVideo).length > 0 ?
                <>
                    <Header> 
                        <button onClick={() => contexto.toggleMode()}>
                            Change mode
                        </button>
                    </Header>
                    
                    <StyledIFrame>
                        <h2>{openedVideo.title || <Skeleton />}</h2>
                        <iframe 
                            width={'560px'} 
                            height={'315px'}
                            src={openedVideo.url.replace("watch?v=", "embed/")}
                            frameBorder={'0'}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen> 
                        </iframe>
                    </StyledIFrame>
                </>
                :
                    <>
                        <Skeleton width={'100%'} height={'230px'} />
                        <UserInfo >
                            <Skeleton width={'80px'} height={'80px'} borderRadius={'50%'} />
                            <div>
                                <Skeleton width={'230px'} count={2} />
                            </div>
                        </UserInfo> 
                        <StyledIFrame>  
                        <Skeleton width={'50%'} />
                            <Skeleton width={'560px'} height={'315px'} />
                        </StyledIFrame>    
                    </>
            } 
        </>
    )

}

export const StyledIFrame = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
`

export const UserInfo = styled.section`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
    
`