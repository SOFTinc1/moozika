import {
  AlbumSongListContainer,
  Card,
  Flex,
  AlbumImg,
  Details,
  Title,
  Artist,
  Duration,
  FavIcon,
} from "./album-song-list.styles";
import Charts2 from "../../assets/images/charts2.png";
import Charts3 from "../../assets/images/charts3.png";
import LoveIcon from "../../assets/svg/Heart.svg";

const AlbumSongList = () => (
  <AlbumSongListContainer>
    <Card>
      <Flex>
        <AlbumImg src={Charts3} />
        <FavIcon src={LoveIcon} />
        <Title>Let me love you ~ Krisx</Title>
        <Artist>Single</Artist>
        <Duration>4:17</Duration>
      </Flex>
    </Card>
    <Card>
      <Flex>
        <AlbumImg src={Charts3} />
        <FavIcon src={LoveIcon} />
        <Title>Let me love you ~ Krisx</Title>
        <Artist>Single</Artist>
        <Duration>4:17</Duration>
      </Flex>
    </Card>
    <Card>
      <Flex>
        <AlbumImg src={Charts3} />
        <FavIcon src={LoveIcon} />
        <Title>Let me love you ~ Krisx</Title>
        <Artist>Single</Artist>
        <Duration>4:17</Duration>
      </Flex>
    </Card>
    <Card>
      <Flex>
        <AlbumImg src={Charts3} />
        <FavIcon src={LoveIcon} />
        <Title>Let me love you ~ Krisx</Title>
        <Artist>Single</Artist>
        <Duration>4:17</Duration>
      </Flex>
    </Card>
    <Card>
      <Flex>
        <AlbumImg src={Charts3} />
        <FavIcon src={LoveIcon} />
        <Title>Let me love you ~ Krisx</Title>
        <Artist>Single</Artist>
        <Duration>4:17</Duration>
      </Flex>
    </Card>
    <Card>
      <Flex>
        <AlbumImg src={Charts3} />
        <FavIcon src={LoveIcon} />
        <Title>Let me love you ~ Krisx</Title>
        <Artist>Single</Artist>
        <Duration>4:17</Duration>
      </Flex>
    </Card>
    <Card>
      <Flex>
        <AlbumImg src={Charts3} />
        <FavIcon src={LoveIcon} />
        <Title>Let me love you ~ Krisx</Title>
        <Artist>Single</Artist>
        <Duration>4:17</Duration>
      </Flex>
    </Card>

  </AlbumSongListContainer>
);

export default AlbumSongList;
