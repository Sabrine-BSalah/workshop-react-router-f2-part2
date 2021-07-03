import './App.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products';
import Product from './Components/Product'
import About from './Components/About';
import Error from './Components/Error';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route path="/product/:id" component={Product} />
        <Route path='/about' component={About} />
        <Route path='/*' component={Error} />
      </Switch>
    </div>
  );
}

export default App;
