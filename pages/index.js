import React, {useState} from 'react';
import config from '../config.json'
import { Menu } from '../src/components/Menu';
import { Header } from '../src/components/Header';
import { Timeline } from '../src/components/Timeline';


function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = useState("");

  return (
    <>
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}>
        <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={config.playlists} favorites={config.favorites}>
          Conteúdo
        </Timeline>
      </div>
    </>
  );
}

export default HomePage


