import './card.css'

function Card() {

    let Name = "Fortnite Tröja"
    let Price = "699"
    let Categories = "Comfy, Shirt"
    let Colors = "Green, Blue, Black, White"

    return (
        <>
            <div className='cardBox'>
                <h1>{Name}</h1>
                <img src="https://i.imgur.com/FF8Ff2z.png" alt="An Extremely Handsome Gorilla" className='cardImg' />
                <h2>{Price}</h2>
                <h3>{Categories}</h3>
                <h3>{Colors}</h3>
            </div>
        </>
    )
}

export default Card