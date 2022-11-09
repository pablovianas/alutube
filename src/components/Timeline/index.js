import { StyledTimeline, StyledThumbnailTitle, StyledThumbnailImage, StyledTimelineSection, ProfileImage } from "./Timeline.style"

export const Timeline = ({searchValue, ...props}) => {
    const playlistNames = Object.keys(props.playlists);
    const favoriteChannels = props.favorites.channels;
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName, index) => {
                const videos = props.playlists[playlistName];
                return (
                    <StyledTimelineSection key={index}>
                        <StyledThumbnailTitle>{playlistName}</StyledThumbnailTitle>
                        <div>
                            {videos.filter((video)=>{
                                const titleNormalized = video.title.toLowerCase();
                                const searchValueNormalized = searchValue.toLowerCase();
                                return titleNormalized.includes(searchValueNormalized)
                            }).map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
                                        <StyledThumbnailImage src={video.thumb} alt="Video thumbnail" />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </StyledTimelineSection>
                )
            })}
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
        </StyledTimeline>
    )
}