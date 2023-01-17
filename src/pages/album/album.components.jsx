import { AlbumContainer, BlackCover, Basic, AlbumCom } from "./album.styles";
import AlbumBanner from "../../components/album-banner/album-banner.components";
import AlbumSongList from "../../components/album-song-list/album-song-list.component";
import SideTab from "../../components/side-tab/side-tab.component";
import Header from "../../components/header/header.component";

const Album = () => (
  <AlbumContainer>
    <BlackCover>
      <Header />
      <Basic>
        <SideTab />
        <AlbumCom>
          <AlbumBanner />
          <AlbumSongList />
        </AlbumCom>
      </Basic>
    </BlackCover>
  </AlbumContainer>
);

export default Album;
