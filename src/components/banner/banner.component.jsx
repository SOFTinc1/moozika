import {
  BannerContainer,
  ImageSrc,
  ImageSrc2,
} from "./banner.styles";
import BannerImg from "../../assets/images/Frame.png";
import MobileBanner from "../../assets/images/mobile.png";

const Banner = () => (
  <BannerContainer>
    <ImageSrc src={BannerImg} />
    <ImageSrc2 src={MobileBanner} />
  </BannerContainer>
);

export default Banner;
