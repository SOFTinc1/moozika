import {
  CarouselContainer,
  H1,
  Carousel,
  Card,
  CoverImg,
  Title,
  Artist
} from "./banner.styles";
import "./banner.css";
import ImgCover from "../../assets/images/1.png";
import ImgCover2 from "../../assets/images/2.png";
import ImgCover3 from "../../assets/images/3.png";
import ImgCover4 from "../../assets/images/4.png";
import ImgCover5 from "../../assets/images/5.png";
import ImgCover6 from "../../assets/images/6.png";
import ImgCover7 from "../../assets/images/7.png";

const Test = () => {
  return (
    <CarouselContainer>
      <H1>Top Songs</H1>
      <Carousel>
        <Card>
          <CoverImg src={ImgCover} />
          <Title>jah elijah</Title>
          <Artist>Murdryck</Artist>
        </Card>

        <Card>
          <CoverImg src={ImgCover2} />
          <Title>jah elijah</Title>
          <Artist>Murdryck</Artist>
        </Card>

        <Card>
          <CoverImg src={ImgCover3} />
          <Title>jah elijah</Title>
          <Artist>Murdryck</Artist>
        </Card>

        <Card>
          <CoverImg src={ImgCover4} />
          <Title>jah elijah</Title>
          <Artist>Murdryck</Artist>
        </Card>

        <Card>
          <CoverImg src={ImgCover5} />
          <Title>jah elijah</Title>
          <Artist>Murdryck</Artist>
        </Card>

        <Card>
          <CoverImg src={ImgCover6} />
          <Title>jah elijah</Title>
          <Artist>Murdryck</Artist>
        </Card>

        <Card>
          <CoverImg src={ImgCover7} />
          <Title>jah elijah</Title>
          <Artist>Murdryck</Artist>
        </Card>
      </Carousel>
    </CarouselContainer>
  );
};

export default Test;
