import './full_name.css'

function FullName() {
    return (
        <div className='mini-block'>
            <label className='mini-block__label' htmlFor='fullname'>ФИО</label>
            <input className="mini-block__input" id='fullname' name='fullname' type="text"/> 
        </div>
        
    )
}

export {FullName}