// import { useNavigate } from "react-router-dom";
// import Form from "react-bootstrap/Form";
import { HeaderContainer, LogoImg, Form } from "./header.styles";
import "./header.css";
import Search from "../search/search";
import Search2 from "../search2/search2";
import Logo from "../../assets/svg/logo.svg";
// import Sidebar from "../side-bar/sidebar.component";
// import Profile from "../../assets/svg/profile.svg";
// import Logout from "../../assets/svg/Logout.svg";

export default function Header() {
  // let navigate = useNavigate();
  return (
    <HeaderContainer>
      <LogoImg src={Logo} />
      <Form id="closeonmobile">
        <Search placeholder="search artist" />
      </Form>
      <Form id="openonmobile">
        <Search2 placeholder="search artist" />
      </Form>
    </HeaderContainer>
  );
}
