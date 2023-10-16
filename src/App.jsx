import './App.css'
import Card from './components/card.jsx'


function App() {

  return (
    <>
      <header>
        <nav>
          <h1>
            JOYCAMP
          </h1>
        </nav>
        <div className='hero'>
          <div className='callToAction'>
            <div className='filter'></div>
            <h1>VÄLKOMMEN</h1>
            <h2>Kolla på årets höstsortiment!</h2>
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
    </>
  )
}

export default App
