import "./App.css";
import { Hexagon, TiledHexagons } from "tiled-hexagons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <TiledHexagons
            maxHorizontal={1}
            tileSideLengths={120}
            tileTextStyles={{
              fontFamily: "Font Awesome Brands",
              fontSize: "58px",
              fill: "white",
            }}
            tileGap={0}
            tileBorderRadii={9}
            tiles={[
              {
                text: "step.0",
                fill: "#4267b2",
                shadow: "#1a2947",
                href: "https://tippi-fifestarr.github.io/ChainlinkTeamFun/",
              },
              {
                text: "step.1",
                fill: "#282828",
                shadow: "#1a1a1a",
                href: "https://github.com/josephsurin/tiled-hexagons",
              },
              {
                text: "step.2",
                fill: "#1dcaff",
                shadow: "#0084b4",
                href: "https://tippi-fifestarr.github.io/ethereum-boilerplate/",
              },
              {
                text: "step.3",
                fill: "#ED01ED",
                shadow: "#0084b4",
                href: "http://localhost:48084/ipns/chat.thedisco.zone/",
              },
            ]}
          />
          <Hexagon
            sideLength={200}
            text="Start Here"
            textStyle={{ fill: "blue" }}
            href="https://github.com/tippi-fifestarr/hexhub2"
          />
        </p>
      </header>
    </div>
  );
}

export default App;
