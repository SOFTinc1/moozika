import {
  AlbumContainer,
  Flex,
  CoverImg,
  AlbumDetails,
  Title,
  Desc,
  Desc2,
  ButtonsBar,
  ButtonContainer,
  Icon,
  Icon2,
  Play,
} from "./album-banner.styles";
import AlbumImg from "../../assets/images/bg.png";
import PlayIcon from "../../assets/svg/play.svg";
import AddIcon from "../../assets/svg/add.svg";
import RedHeart from "../../assets/svg/redLike.svg";

const AlbumBanner = () => (
  <AlbumContainer>
    <Flex>
      <CoverImg src={AlbumImg} />
      <AlbumDetails>
        <Title>tomorrows tune</Title>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ad animi
          sapiente amet! Et omnis corrupti impedit velit. Adipisci, ducimus!
        </Desc>
        <Desc2>64 songs ~ 16 hrs+</Desc2>
        <ButtonsBar>
          <ButtonContainer>
            <Icon src={PlayIcon} />
            <Play>play</Play>
          </ButtonContainer>
          <ButtonContainer>
            <Icon src={AddIcon} />
            <Play>add to collection</Play>
          </ButtonContainer>
          <Icon2 src={RedHeart} />
        </ButtonsBar>
      </AlbumDetails>
    </Flex>
  </AlbumContainer>
);

export default AlbumBanner;
