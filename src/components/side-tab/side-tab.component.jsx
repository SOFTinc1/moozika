import { SideTabContainer, TabA, OptionLink, LinkIcon, TabB } from "./side-tab.styles";
import Home from "../../assets/svg/Home.svg";
import Music from "../../assets/svg/music.svg";
import Radio from "../../assets/svg/radio.svg";
import Video from "../../assets/svg/videos.svg";
import Profile from "../../assets/svg/profile.svg";
import Logout from "../../assets/svg/Logout.svg";

export default function SideTab() {
  return (
    <SideTabContainer>
      <TabA>
        <OptionLink to="/">
          <LinkIcon src={Home} />
        </OptionLink>
        <OptionLink to="/music-list">
          <LinkIcon src={Music} />
        </OptionLink>
        <OptionLink to="/radio">
          <LinkIcon src={Radio} />
        </OptionLink>
        <OptionLink to="">
          <LinkIcon src={Video} />
        </OptionLink>
      </TabA>

      <TabB>
        <OptionLink to="/profile">
          <LinkIcon src={Profile} />
        </OptionLink>
        <OptionLink to="/logout">
          <LinkIcon src={Logout} />
        </OptionLink>
      </TabB>
    </SideTabContainer>
  );
}
