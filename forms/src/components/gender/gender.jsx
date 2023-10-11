import './gender.css';

function Gender({setGender}) {

    const handlerCheckGender=(event)=>{
        setGender(event.currentTarget.value)
    }

    return (
        <div className='mini-block'>
            <p className="mini-block__label">Пол</p>
            <div className="gender-block">
                <div> 
                    <input className="gender-block__input" onChange={handlerCheckGender} id='man' name='gender' type="radio" value='man'/>
                    <label htmlFor='man'>Мужской</label>
                   
                </div>
                <div>
                    <input className="gender-block__input" onChange={handlerCheckGender} id='woman' name='gender' type="radio" value='woman'/>
                    <label htmlFor='woman'>Женский</label>
              </div>
            </div>
            
        </div>
        
    )
}

export {Gender}