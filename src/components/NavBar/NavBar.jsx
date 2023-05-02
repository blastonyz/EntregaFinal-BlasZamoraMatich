import './NavBar.css'
import {Link,NavLink} from 'react-router-dom'
import {CartWidget} from '../CartWidget/CartWidget'
export const NavBar = () => {
  return (
    <nav className='NavBar'>
        <Link to='/'>
          <h3>e-comerce</h3>
        </Link>
    <div className='categorias'>
      <NavLink to={'/categoria/belleza'} className={({isActive})=> isActive?'ActiveOption':'Option'}>Belleza</NavLink>
      <NavLink to={'/categoria/oficios'} className={({isActive})=> isActive?'ActiveOption':'Option'}>Oficios</NavLink>
      <NavLink to={'/categoria/tecnologia'} className={({isActive})=> isActive?'ActiveOption':'Option'}>Tecnologia</NavLink>
    </div>
    <CartWidget/>

    </nav>
    
  )
}


/*<div className="buttons">
        <button className='button'>Oficios</button>
        <button className='button'>Belleza</button>
        <button className='button'>Tecnologia</button>
        <button className='button'>Nosotros</button>
    </div>*/