import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import VendingMachine from './VendingMachine';
import Cheetos from './Cheetos';
import Reeses from './Reeses';
import Kitkat from './Kitkat';
import NavBar from './Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar class="Nav"/>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/cheetos">
          <Cheetos />
        </Route>
        <Route exact path="/reeses">
          <Reeses />
        </Route>
        <Route exact path="/kitkat">
          <Kitkat />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
