import { getToday } from '../../helpers/helpers';

import { REGEX } from '../../config/varibales';

function DateBirth({
  dateBirth,
  setDateBirth,
  validationDateBirth,
  setValidationDateBirth,
}) {
  const handlerChangerDateBirth = (event) => {
    setDateBirth(event.currentTarget.value);
    setValidationDateBirth(REGEX.dateBirth.test(event.currentTarget.value));
  };

  return (
    <div className="mini-block">
      <label className="mini-block__label" htmlFor="datebirth">
        Дата рождения
        {validationDateBirth ? null : (
          <span className="mini-block__label_important">*</span>
        )}
      </label>
      <input
        className="mini-block__input"
        value={dateBirth}
        onChange={handlerChangerDateBirth}
        name="datebirth"
        id="datebirth"
        type="date"
        max={getToday()}
        required
        pattern="^\d{4}-\d{2}-\d{2}$"
      ></input>
    </div>
  );
}

export { DateBirth };
