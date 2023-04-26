import "./index.css";
import greenbg from "./assets/circle.svg";
import ShortenApi from "./ShortenApi";

function App() {

  return (
    <div className="hero">
      <div className="App">
        <div className="main">
          <h1>
            Shorten <span>URL</span> In One Click
          </h1>

            <ShortenApi />


          <h3>
            Built by <span><a href="https://twitter.com/knight_deve" target="_blank">Eric</a></span> &{" "}
            <span>
              <a href="https://twitter.com/theNuelgeek" target="_blank">Nuelgeek</a>
            </span>
          </h3>
        </div>
      </div>
      <img src={greenbg} alt="" className="circle-bg" />
    </div>
  );
}

export default App;
