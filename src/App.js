import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Menu from './components/Menu';

import DogsState from './context/dogs/DogsState';
import HaloState from './context/Halo/HaloState';
import Food from './components/Food';

function App() {
  return (
    <>
      <DogsState>
        <HaloState>
          <Main />
          <Menu />
          <Food />
        </HaloState>
      </DogsState>
    </>
  );
}

export default App;
