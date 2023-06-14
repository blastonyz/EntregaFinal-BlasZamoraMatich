
import { MainHeader } from './components/Header/MainHeader'
import { NavBar } from './components/NavBar/NavBar';
import { ItemsListCont } from './components/ItemsListCont/ItemsListCont';
import './App.css'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { CartProvider } from '../src/context/CartContext';
import {Cart} from '../src/components/Cart/Cart'
import { Checkout } from './components/Checkout/Checkout';

function App() {
  return (
    <div>  
      <MainHeader/>
      <div className="App">
      <CartProvider>
      <BrowserRouter>
      <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemsListCont/>} />
        <Route path='categoria/:categoriaId' element={<ItemsListCont/>} />
        <Route path='item/:itemId' element={<ItemDetailContainer/>} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </div>
      </BrowserRouter>
      </CartProvider>
      </div>
    </div>
  );
}

export default App;


