import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'

function App() {

  const [shop, setShop] = useState({
    products: [],
    search: ''
  })

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(products => setShop({ ...shop, products: products }))

  },[])

  const { products } = shop

  console.log(products)


  return (
    <div className="App">
      <Switch>
        <Route path='/' exact>
          <Home products={products}/>
        </Route>
        <Route path='/:id'>
          <Product products={products}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
