import Head from "./source/Head";
import Left from "./source/Left";
import { NavBar } from "./source/NavBar";
import Video from "./source/Video";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Head />
      <div className="centerBody">
        <Left />
        <Video  />
      </div>

    </div>
  );
}

export default App;
