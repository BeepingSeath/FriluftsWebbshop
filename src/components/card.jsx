import './card.css'

function Card() {

    let Name = "Kiikii Original"
    let Price = "699"
    let Categories = "Comfy, Shirt"
    let Colors = "Green, Blue, Black, White"
    let image = "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
    let imageAlt = "An Extremely Handsome Gorilla"

    return (
        <>
            <div className='cardBox'>
                <h2>{Name}</h2>
                <img src={image} alt={imageAlt} className='cardImg' />
                <h3>{Price} :-</h3>
                <h4>{Categories}</h4>
                <h4>{Colors}</h4>
            </div>
        </>
    )
}

export default Card