import './App.css'
import Card from './components/card.jsx'
import Footer from './components/footer.jsx'


function App() {

  return (
    <>
      <header>
        <nav>
          <span className="material-symbols-outlined"> menu </span>
          <h1>
            JOYCAMP
          </h1>
          <span className="material-symbols-outlined"> shopping_cart </span>
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
