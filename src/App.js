import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/:handle'>
          <Product />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
