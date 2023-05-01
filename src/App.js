
import { MainHeader } from './components/Header/MainHeader'
import { NavBar } from './components/NavBar/NavBar';
import { ItemsListCont } from './components/ItemsListCont/ItemsListCont';
import './App.css'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div>  
      <MainHeader/>
      <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemsListCont/>} />
        <Route path='categoria/:categoriaId' element={<ItemsListCont/>} />
        <Route path='item/:itemId' element={<ItemDetailContainer/>} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
      </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;


/*<CartWidget/>
      
<ItemsListCont/>
<ItemCount initial={1} stock={10} onAdd={(cantidad)=> console.log("cantidad agregada",cantidad)}/>
import { CartWidget } from './components/CartWidget/CartWidget';
import { ItemCount } from './components/ItemCount/ItemCount';*/