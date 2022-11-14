import React, {useState} from 'react';
import config from '../config.json'
import { Menu } from '../src/components/Menu';
import { Header } from '../src/components/Header';
import { Timeline } from '../src/components/Timeline';
import { RegisterVideo } from '../src/components/RegisterVideo';
import { videoService } from "../src/services/videoService";


function HomePage() {
  const service = videoService();
  const [valorDoFiltro, setValorDoFiltro] = useState("");
  const [playlists, setPlaylists] = useState({})
  const [playlistNames, setplaylistNames] = useState([])


  React.useEffect(() => {
    service
      .getAllVideos()
      .then((informations) => {
        const novasPlaylists = {};
        informations.data.forEach((video) => {
          if (!novasPlaylists[video.playlist]) novasPlaylists[video.playlist] = [];
          novasPlaylists[video.playlist] = [
            video,
            ...novasPlaylists[video.playlist],
          ];
        });
        setPlaylists(novasPlaylists);
      });

    service
      .getPlaylistNames()
      .then((informations)=>{
        setplaylistNames(informations.data)
      })
  }, []);

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={playlists} favorites={config.favorites}>
          Conteúdo
        </Timeline>
        <RegisterVideo playlistNames={playlistNames} />
      </div>
    </>
  );
}

export default HomePage


