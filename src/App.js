import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Inicio from './components/pages/Inicio'
import Nosotros from './components/pages/Nosotros'
import Productos from './components/pages/Productos'
import CartWidget from './components/CartWidget/CartWidget'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {
  return (
  <>
    <div>
      < Navbar/>
    </div>
    
    <div>
<ItemListContainer/>

    </div>
  </>
  );
}

export default App;
