import './footer.css'

function Footer() {

    let companyName = "Joycamp AB"
    let address = "MUiSGatan 27, 906 xx"
    let city = "Umeå, Sverige"
    let telephoneNum = "090-xxxxxx"
    let email = "JoyCamp@gmail.com"

    return (
        <>
            <div className='footer'>
                <h1 className='contactHeader'>
                    Contact Information
                </h1>
                <div className='infoPositions'>
                    <div className='contactInfo'>
                        <p>{companyName}</p>
                        <p>{address}</p>
                        <p>{city}</p>
                        <p>{telephoneNum}</p>
                        <p>{email}</p>
                        <a href="./about">About us</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer