
import { CartWidget } from './components/CartWidget/CartWidget';
import { NavBar } from './components/NavBar/NavBar';
import { ItemsListCont } from './components/ItemsListCont/ItemsListCont';

function App() {
  return (
        
    <div className="App">
      <NavBar/>
      <CartWidget/>
      <ItemsListCont greeting={'Nunca es Tarde'}/>
    </div>
  );
}

export default App;
