
function GroupOfClients() {
    return (
        <div className='mini-block'>
            <label className='mini-block__label' for='groupOfClients'>Группа клиентов</label>
            <select multiple className="mini-block__input" id='groupOfClients' name='groupOfClients' type="select">
                <option value='VIP'>VIP</option>
                <option value='Проблемные'>Проблемные</option>
                <option value='ОМС'>ОМС</option>
                <option value='ДСМ'>ДМС</option>
            </select> 
        </div>
        
    )
}

export {GroupOfClients}