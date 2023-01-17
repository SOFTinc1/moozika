import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import {
  FooterContainer,
  Flex,
  Col1,
  TrackImg,
  TrackDetails,
  Title,
  Artist,
  Col2,
} from "./footer.styles";
import "./footer.css";
import ImgTrack from "../../assets/images/songImage.png";
import MorningMan from "../../assets/music/2.mp3";
// import ImgShuffle from "../../assets/svg/shuffle.svg";
// import ImgPrev from "../../assets/svg/previous.svg";
// import ImgPlay from "../../assets/svg/play.svg";
// import ImgNext from "../../assets/svg/next.svg";
// import ImgRepeat from "../../assets/svg/repeat.svg";
// import ImgVolume from "../../assets/svg/volume.svg";

export default function Footer() {
  // const percentage = 73;
  // let navigate = useNavigate();
  return (
    <FooterContainer>
      <Flex>
        <Col1>
          <TrackImg src={ImgTrack} />
          <TrackDetails>
            <Title>jah elijah</Title>
            <Artist>james</Artist>
          </TrackDetails>
        </Col1>
        <Col2>
          <AudioPlayer
            layout="stacked-reverse"
            autoPlay={false}
            src={MorningMan}
            showSkipControls={true}
            showJumpControls={false}
            onPlay={(e) => console.log("onPlay")}
          />
        </Col2>
      </Flex>
    </FooterContainer>
  );
}
