// eslint-disable-next-line no-unused-vars
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { getFirstAndLastNames } from '../../helpers/helpers';

import './full_name.css';

function FullName({ fullName, setFullName }) {
  // eslint-disable-next-line no-unused-vars
  const [autocompleteData, setAutocompleteData] = useState([]);
  console.log(autocompleteData);

  const autocompleteDataRender = autocompleteData.map((el) => (
    <li key={nanoid()}>{el.value}</li>
  ));

  useEffect(() => {
    getFirstAndLastNames(fullName, setAutocompleteData);
  }, [fullName]);

  const handlerInput = (event) => {
    setFullName(event.currentTarget.value);
  };

  return (
    <div className="mini-block">
      <label className="mini-block__label" htmlFor="fullname">
        ФИО
      </label>
      <input
        className="mini-block__input"
        id="fullname"
        name="fullname"
        type="text"
        value={fullName}
        onInput={handlerInput}
        placeholder="Иванов Иван Иванович"
      />

      <ul>{autocompleteDataRender}</ul>
    </div>
  );
}

export { FullName };
