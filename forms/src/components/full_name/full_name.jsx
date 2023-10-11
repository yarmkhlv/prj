import './full_name.css'

function FullName({fullName, setFullName}) {

    const handlerInput=(event) => {
        setFullName(event.currentTarget.value)
    }

    return (
        <div className='mini-block'>
            <label className='mini-block__label' htmlFor='fullname'>ФИО</label>
            <input className="mini-block__input" id='fullname' name='fullname' type="text" value={fullName} onInput={handlerInput}/> 
        </div>
        
    )
}

export {FullName}