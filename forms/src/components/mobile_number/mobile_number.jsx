
function MobileNumber({mobileNumber, setMobileNumber}) {

    const handerChangerMobileNumber=(event)=>{
        setMobileNumber(event.target.value)
    }

    return (
        <div className='mini-block'>
            <label className='mini-block__label' htmlFor='mobilenumber'>Номер телефона</label>
            <input className="mini-block__input" value={mobileNumber} onChange={handerChangerMobileNumber}  id='mobilenumber' name='mobilenumber' type="tel" pattern="[7]{1}-[0-9]{3}-[0-9]{2}-[0-9]{2}" required placeholder="8-123-456-78-90"/> 
        </div>
        
    )
}

export {MobileNumber}