import Footer from "@/layouts/Footer";
import "./index.less";

function App() {
  return (
    <>
      <div className="page">
        <div className="banner-container" />
        <div className="character">
          <i className="name">DueTy's</i>
          <p>程序员、机车男、One Piece、Slam Dunk...</p>
        </div>
        <i style={{ color: "rgb(82, 82, 82)" }}>I'm in love with my Ninja400</i>
        <Footer />
      </div>
    </>
  );
}

export default App;
