import { StyledTimeline } from "./Timeline.style"

export const Timeline = (props) => {
    const playlistNames = Object.keys(props.playlists);

    return (
        <StyledTimeline>
            {playlistNames.map((playlistName, index) => {
                const videos = props.playlists[playlistName];
                return (
                    <section key={index}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a key={video.url} href={video.url}>
                                        <img src={video.thumb} alt="Video thumbnail" />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}