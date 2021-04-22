import './App.css';
//componets
import Navbar from './components/navbar/Navbar'
import Menu from './components/menu/Menu'
import Order from './components/orden/orden';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Order/>

    </div>

  )

}

export default App;
