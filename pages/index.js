import styled from 'styled-components'
import config from '../config.json'
import { CSSReset } from '../src/styles/CSSReset'
import { Menu } from '../src/components/Menu/Menu';
import { Header } from '../src/components/Header/Header';
import { Timeline } from '../src/components/Timeline/Timeline';


function HomePage() {

  return (
    <>
      <CSSReset />
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}>
        <Menu />
        <Header />
        <Timeline playlists={config.playlists}>
          Conteúdo
        </Timeline>
      </div>
    </>
  );
}

export default HomePage


