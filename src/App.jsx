import './App.css'
import Card from './components/card.jsx'
import Footer from './components/footer.jsx'


function App() {

  return (
    <>
      <header>
        <nav>
          <a href="./menu"><span className="material-symbols-outlined"> menu </span></a>
          <h1>
            JOYCAMP
          </h1>
          <div>
            <a href="./search"><span className="material-symbols-outlined"> search </span></a>
            <a href="./cart"><span className="material-symbols-outlined"> shopping_cart </span></a>
          </div>
        </nav>
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
          {Array(6)
            .fill(true)
            .map((index) => (
              <Card key={index} />
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
