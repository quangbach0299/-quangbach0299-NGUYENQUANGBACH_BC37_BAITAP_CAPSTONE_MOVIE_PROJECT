import './App.css';
import ChunkLoad from './Lodash/ChunkLoad';
import FillLodash from './Lodash/FillLodash';
import JoinDemo from './Lodash/JoinDemo';
import LastFirstLodash from './Lodash/LastFirstLodash';
import { DemoGrid } from './TailWindComponent/DemoGrid';

function App() {
  return (
    <div className='container  '>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      {/* <DemoGrid ></DemoGrid>
      <br></br>
      <hr></hr>
      <JoinDemo></JoinDemo>
      <hr></hr>
      <LastFirstLodash></LastFirstLodash>
      <hr></hr> */}
      {/* <ChunkLoad></ChunkLoad> */}
      <FillLodash></FillLodash>
    </div>

  );
}

export default App;
