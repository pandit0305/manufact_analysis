import WineScatterPlot from './components/WineScatterPlot';
import WineBarPlot from './components/WineBarPlot';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Wine Data Visualization</h1>
      <div>
        <WineScatterPlot/>
      </div>
      <div>
        <WineBarPlot/>
      </div>
    </div>
  );
}

export default App;
