import { FioSuggestions } from 'react-dadata';

import { API_DADATA } from '../../config/varibales';

import 'react-dadata/dist/react-dadata.css';
import './full_name.css';

function FullName({ fullName, setFullName }) {
  return (
    <div className="mini-block">
      <label className="mini-block__label">ФИО</label>
      <FioSuggestions
        token={API_DADATA.TOKEN}
        value={fullName}
        onChange={setFullName}
      />
    </div>
  );
}

export { FullName };
