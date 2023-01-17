import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";


import Homepage from "./pages/homepage/homepage.component";
import Footer from "./components/footer/footer.component";
import Album from "./pages/album/album.components";
import MusicList from "./pages/music-list/music-list.components";
// import Test from "./components/test/banner.component";


class App extends React.Component {
  

  render() {
    return (
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/radio" element={<Album />} />
          <Route exact path="/music-list" element={<MusicList />} />
          {/* <Route exact path="/" element={<Test />} /> */}
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
