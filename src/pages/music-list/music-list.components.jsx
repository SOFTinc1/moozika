import {
  MusicListContainer,
  Basic,
  MusicListCom,
} from "./music-list.styles";
import MusicListLibrary from "../../components/music-list-library/music-list-library.component";
import SideTab from "../../components/side-tab/side-tab.component";
import Header from "../../components/header/header.component";


const MusicList = () => (
  <MusicListContainer>
    <Header />
    <Basic>
      <SideTab />
      <MusicListCom>
        <MusicListLibrary />
      </MusicListCom>
    </Basic>
  </MusicListContainer>
);

export default MusicList;
