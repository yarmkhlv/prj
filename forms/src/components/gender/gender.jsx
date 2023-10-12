import { useEffect } from 'react';

import './gender.css';

function Gender({ gender, setGender, setValidationGender }) {
  const handlerCheckGender = (event) => {
    setGender(event.currentTarget.value);
  };

  useEffect(() => {
    if (gender === 'man' || gender === 'woman') {
      setValidationGender(true);
    } else {
      setValidationGender(false);
    }
  }, [gender, setValidationGender]);
  return (
    <div className="mini-block">
      <p className="mini-block__label">
        Пол
        {gender ? null : <span className="mini-block__label_important">*</span>}
      </p>
      <div className="gender-block">
        <div>
          <input
            className="gender-block__input"
            onChange={handlerCheckGender}
            id="man"
            name="gender"
            type="radio"
            value="man"
            required
            checked={gender === 'man'}
          />
          <label htmlFor="man">Мужской</label>
        </div>
        <div>
          <input
            className="gender-block__input"
            onChange={handlerCheckGender}
            id="woman"
            name="gender"
            type="radio"
            value="woman"
            required
            checked={gender === 'woman'}
          />
          <label htmlFor="woman">Женский</label>
        </div>
      </div>
    </div>
  );
}

export { Gender };
