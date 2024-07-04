import logo from './logo.svg';
import './App.css';
import Body from './Component/Body';
import { DataContextProvider } from './Component/Data/Context';
import { MouseProvider } from './Component/Data/MouseContext';

function App() {
  return (
    <div className="">
      <DataContextProvider>
        <MouseProvider>
          <Body/>
        </MouseProvider>
      </DataContextProvider>
    </div>
  );
}

export default App;
