import Select from 'react-select';

import { dataTherapists } from '../../config/varibales';

function Therapist({ therapist, setTherapist }) {
  const handlerChangerTherapist = (event) => {
    setTherapist(event);
  };

  return (
    <div className="mini-block">
      <p className="mini-block__label">Лечащий врач</p>
      <Select
        options={dataTherapists}
        value={therapist}
        onChange={handlerChangerTherapist}
        placeholder="Выбрать"
      />
    </div>
  );
}

export { Therapist };
