import { HomepageContainer, Basic, Flex, HomeItems } from "./homepage.styles";
import Banner from "../../components/banner/banner.component";
// import Charts from "../../components/charts/charts.component";
// import Test from "../../components/test/banner.component";
import Header from "../../components/header/header.component";
import SideTab from "../../components/side-tab/side-tab.component";
// import MusicListLibrary from "../../components/music-list-library/music-list-library.component";

const Homepage = () => (
  <HomepageContainer>
    <Header />
    <Basic>
      <SideTab />
      <HomeItems>
        <Flex>
          <Banner />
          <Charts />
        </Flex>
        {/* <Test /> */}
        {/* <MusicListLibrary /> */}
      </HomeItems>
    </Basic>
  </HomepageContainer>
);

export default Homepage;
