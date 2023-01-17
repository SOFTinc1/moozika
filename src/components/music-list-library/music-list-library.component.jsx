import {
  MusicListLibraryContainer,
  Head,
  Flex,
  Card,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Card7,
  Black,
  DetailsDiv,
  Details,
  Title,
  Artist,
  IconImg,
} from "./music-list-library.styles";
import Play from "../../assets/svg/play.svg";

const MusicListLibrary = () => (
  <MusicListLibraryContainer>
    <Head>Library</Head>
    <Flex>
      <Card>
        <Black>
          <DetailsDiv>
            <Details>
              <Title>Golden age of 80s</Title>
              <Artist>Sean swadder</Artist>
            </Details>
            <IconImg src={Play} />
          </DetailsDiv>
        </Black>
      </Card>

      <Card2>
        <Black>
          <DetailsDiv>
            <Details>
              <Title>life in a bubble</Title>
              <Artist>Sean swadder</Artist>
            </Details>
            <IconImg src={Play} />
          </DetailsDiv>
        </Black>
      </Card2>

      <Card3>
        <Black>
          <DetailsDiv>
            <Details>
              <Title>desperate</Title>
              <Artist>Sean swadder</Artist>
            </Details>
            <IconImg src={Play} />
          </DetailsDiv>
        </Black>
      </Card3>

      <Card4>
        <Black>
          <DetailsDiv>
            <Details>
              <Title>money man</Title>
              <Artist>Sean swadder</Artist>
            </Details>
            <IconImg src={Play} />
          </DetailsDiv>
        </Black>
      </Card4>

      <Card5>
        <Black>
          <DetailsDiv>
            <Details>
              <Title>yolo yolo</Title>
              <Artist>Sean swadder</Artist>
            </Details>
            <IconImg src={Play} />
          </DetailsDiv>
        </Black>
      </Card5>

      <Card6>
        <Black>
          <DetailsDiv>
            <Details>
              <Title>try sleeping with a broken heart</Title>
              <Artist>Sean swadder</Artist>
            </Details>
            <IconImg src={Play} />
          </DetailsDiv>
        </Black>
      </Card6>

      <Card7>
        <Black>
          <DetailsDiv>
            <Details>
              <Title>always on guard omo aye</Title>
              <Artist>portable</Artist>
            </Details>
            <IconImg src={Play} />
          </DetailsDiv>
        </Black>
      </Card7>
    </Flex>
  </MusicListLibraryContainer>
);

export default MusicListLibrary;
