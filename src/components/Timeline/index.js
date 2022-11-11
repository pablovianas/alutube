import { useEffect, useState, useContext } from "react"
import Link from "next/link";
import { VideoContext } from "../../contexts/VideoProvider";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {
    StyledTimeline,
    StyledThumbnailTitle,
    StyledThumbnailImage,
    StyledTimelineSection,
    ProfileImage,
    StyledSkeleton
} from "./Timeline.style"


export const Timeline = ({ searchValue, videoInformations, ...props }) => {

    const context = useContext(VideoContext)
    const playlistNames = Object.keys(props.playlists);
    const favoriteChannels = props.favorites.channels;

    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])


    return (
        <StyledTimeline>
            {playlistNames.map((playlistName, index) => {
                const videos = props.playlists[playlistName];
                return (
                    <>
                        {!isLoading ? 
                            <StyledTimelineSection key={playlistName}>
                                <StyledThumbnailTitle>{playlistName}</StyledThumbnailTitle>
                                <div key={index}>
                                    {videos.filter((video) => {
                                        const titleNormalized = video.title.toLowerCase();
                                        const searchValueNormalized = searchValue.toLowerCase();
                                        return titleNormalized.includes(searchValueNormalized)
                                    }).map((video) => {
                                        return (
                                            <Link key={video.url} href={{ pathname: '/video', }} onClick={() => context.getVideo(video)} >
                                                <StyledThumbnailImage src={video.thumb} alt="Video thumbnail" />
                                                <span>
                                                    {video.title}
                                                </span>
                                            </Link>
                                        )
                                    })}
                                </div>
                            </StyledTimelineSection>
                            :
                            <StyledSkeleton height={'230px'} style={{zIndex: '-1'}}>
                                <Skeleton width={'75px'} height={'30px'}/>
                                <div>
                                    {videos.map(() => {
                                        return (
                                            <Skeleton width={'200px'} height={'200px'} duration={10} style={{zIndex: '1000'}}/>
                                        )
                                    })}
                                </div>
                            </StyledSkeleton>
                        }
                    </>
                )
            })}
            <>
                {!isLoading ? 
                        <StyledTimelineSection>
                            <StyledThumbnailTitle>Front-end Inspirations</StyledThumbnailTitle>
                            <div>
                                {
                                    favoriteChannels.map((channel, index) => {
                                        return (
                                            <>
                                                <a key={index} href={channel.url}>
                                                    <ProfileImage src={channel.image} alt="Profile picture" />
                                                    <span>{channel.name}</span>
                                                </a>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </StyledTimelineSection>
                        :
                        <StyledSkeleton height={'230px'} style={{ zIndex: '-1' }}>
                            <Skeleton width={'75px'} height={'30px'} />
                            <div>
                            {favoriteChannels.map(() => {
                                    return (
                                        <Skeleton width={'200px'} height={'200px'} duration={10} style={{ zIndex: '1000' }} />
                                    )
                                })}
                            </div>
                        </StyledSkeleton>
                }
            </>
        </StyledTimeline>
    )
}

