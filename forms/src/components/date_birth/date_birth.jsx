function DateBirth({dateBirth, setDateBirth}) {

    const handlerChangerDateBirth=(event)=>{
        setDateBirth(event.currentTarget.value)
    }

    return (
        <div className="mini-block">
            <label className="mini-block__label" htmlFor='datebirth'>Дата рождения</label>
            <input className="mini-block__input" value={dateBirth} onChange={handlerChangerDateBirth} name='datebirth' id='datebirth' type='date' required></input>
        </div>
    )
}

export {DateBirth}