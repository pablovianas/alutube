import { StyledHeader, StyledBanner } from "./Header..style"
import config from '../../../config.json'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from "react"

export const Header = () => {
    const [isLoading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },2000)
    },[])


    return (
        <StyledHeader>
            
                {!isLoading ?
                    <>
                        <StyledBanner bg={config.banner}/>
                        <section className="user-info">
                            <img src={`https://github.com/${config.github}.png`} alt="Github profile" />
                            <div>
                                <h2>{config.name}</h2>
                                <p>{config.job}</p>
                            </div>
                        </section>
                    </>
                :
                    <>
                        <Skeleton width={'100%'} height={'230px'}/>
                        <section className="user-info">
                            <Skeleton width={'80px'} height={'80px'} borderRadius={'50%'}/>
                            <div>
                                <Skeleton width={'230px'}  count={2}/>
                            </div>
                        </section>      
                    </>
                }       
            
        </StyledHeader>
    )
}