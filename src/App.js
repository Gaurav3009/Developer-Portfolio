import logo from './logo.svg';
import './App.css';
import Body from './Component/Body';
import { DataContextProvider } from './Component/Data/Context';

function App() {
  return (
    <div className="">
      <DataContextProvider>
        <Body/>
      </DataContextProvider>
    </div>
  );
}

export default App;
