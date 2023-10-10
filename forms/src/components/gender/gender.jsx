import './gender.css';

function Gender() {
    return (
        <div className='mini-block'>
            <p className="mini-block__label">Пол</p>
            <div className="gender-block">
                <div> 
                    <input className="gender-block__input" id='man' name='gender' type="radio" value='man'/>
                    <label for='man'>Мужской</label>
                   
                </div>
                <div>
                    <input className="gender-block__input" id='woman' name='gender' type="radio" value='woman'/>
                    <label for='woman'>Женский</label>
              </div>
            </div>
            
        </div>
        
    )
}

export {Gender}