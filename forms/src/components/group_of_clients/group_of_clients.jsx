import Select from 'react-select';

import { dataGroupOfClients } from "../../config/varibales";

function GroupOfClients({groupOfClients, setGroupOfClients}) {
    
 const handleChange = groupOfClients => {
          setGroupOfClients(groupOfClients);
        };

return (
    <div className='mini-block'>
      <p className='mini-block__label'>Группа клиентов</p>
        <Select
            isMulti
            options={dataGroupOfClients}
            value={groupOfClients}
            onChange={handleChange}
            placeholder='Выбрать'
            noOptionsMessage={()=>'Все варианты выбраны'}
      />
    </div>
)}

export {GroupOfClients};