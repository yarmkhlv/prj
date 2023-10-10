function DateBirth() {
    return (
        <div className="mini-block">
            <label className="mini-block__label" for='datebirth'>Дата рождения</label>
            <input className="mini-block__input" name='datebirth' id='datebirth' type='date' required></input>
        </div>
    )
}

export {DateBirth}