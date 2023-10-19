import './App.css'
import Card from './components/card.jsx'
import Footer from './components/footer.jsx'
import Navbar from './components/navbar.jsx'
//import { ProductList } from './ProductList.jsx'

import { useState, useEffect } from "react"


function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/product')
      .then((res) => res.json())
      .then((json) => setProducts(json.data))
  }, [])
  console.log(products)
  return (
    <>
      <header>
        <Navbar />
        <div className='hero'>
          <div className='callToAction'>
            <div className='filter'></div>
            <h1>Welcome!</h1>
            <h2>Check out our fall selection</h2>
          </div>
        </div>
      </header>
      <div className='cardsContainer'>
        <div className='cards'>
          {products && products.map((product, index) => (
            <Card key={index} product={product} />
          ))
          }
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
