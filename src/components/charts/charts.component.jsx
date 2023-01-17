import {
  ChartsContainer,
  Head,
  Card,
  CardImg,
  DetailsDiv,
  Title,
  Artist,
  Duration,
  FavIcon
} from "./charts.styles";
import Charts2 from "../../assets/images/charts2.png";
import Charts3 from "../../assets/images/charts3.png";
import LoveIcon from "../../assets/svg/Heart.svg";


const Charts = () => (
  <ChartsContainer>
    <Head>top albums</Head>

    <Card>
      <CardImg src={Charts3} />
      <DetailsDiv>
        <Title>Golden age of 80s</Title>
        <Artist>Sean swadder</Artist>
        <Duration>2:34:45</Duration>
      </DetailsDiv>
      <FavIcon src={LoveIcon} />
    </Card>

    <Card>
      <CardImg src={Charts2} />
      <DetailsDiv>
        <Title>Reggae “n” blues</Title>
        <Artist>Sean swadder</Artist>
        <Duration>2:34:45</Duration>
      </DetailsDiv>
      <FavIcon src={LoveIcon} />
    </Card>

    <Card>
      <CardImg src={Charts3} />
      <DetailsDiv>
        <Title>Tomorrow’s tunes</Title>
        <Artist>Sean swadder</Artist>
        <Duration>2:34:45</Duration>
      </DetailsDiv>
      <FavIcon src={LoveIcon} />
    </Card>
  </ChartsContainer>
);

export default Charts;
