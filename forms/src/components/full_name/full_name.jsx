import { FioSuggestions } from 'react-dadata';

import { API_DADATA, REGEX } from '../../config/varibales';

import 'react-dadata/dist/react-dadata.css';
import './full_name.css';

function FullName({
  fullName,
  setFullName,
  validationFullName,
  setValidationFullName,
}) {
  const bindTwoFunction = (event) => {
    setFullName({ value: event.currentTarget.value });
    setValidationFullName(REGEX.fullName.test(fullName.value));
  };

  return (
    <div className="mini-block">
      <label className="mini-block__label">
        ФИО
        {validationFullName ? null : (
          <span className="mini-block__label_important">*</span>
        )}
      </label>
      <FioSuggestions
        token={API_DADATA.TOKEN}
        inputProps={{
          onBlur: bindTwoFunction,
          onInput: bindTwoFunction,
          pattern: '^[A-Za-zА-ЯЁа-яё]+ [A-Za-zА-ЯЁа-яё]+ [A-Za-zА-ЯЁа-яё]+$',
          required: true,
          placeholder: 'Иванов Иван Иванович',
        }}
        value={fullName}
      />
    </div>
  );
}

export { FullName };
