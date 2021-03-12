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

  const { products, search } = shop

  console.log(products)

  const filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="App">
    <form>
      <input type='search' placeholder='go' onChange={(e) => setShop({ ...shop, search: e.target.value })}/>
    </form>
      <Switch>
        <Route path='/' exact>
          <Home products={filteredProducts}/>
        </Route>
        <Route path='/:id'>
          <Product products={products}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
