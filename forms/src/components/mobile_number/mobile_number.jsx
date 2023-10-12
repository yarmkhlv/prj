import { IMaskInput } from 'react-imask';

import { REGEX } from '../../config/varibales';

function MobileNumber({
  mobileNumber,
  setMobileNumber,
  validationMobileNumber,
  setValidationMobileNumber,
}) {
  const handerChangerMobileNumber = (event) => {
    setMobileNumber(event.target.value);
    setValidationMobileNumber(REGEX.mobileNumber.test(event.target.value));
  };

  return (
    <div className="mini-block">
      <label className="mini-block__label" htmlFor="phone">
        Номер телефона
        {validationMobileNumber ? null : (
          <span className="mini-block__label_important">*</span>
        )}
      </label>
      <IMaskInput
        required
        className="mini-block__input"
        value={mobileNumber}
        onChange={handerChangerMobileNumber}
        id="phone"
        type="tel"
        mask="+7 (000) 000-00-00"
        placeholder="+7 (123) 456-78-90"
        definitions={{
          0: /[0-9]/,
        }}
      />
    </div>
  );
}

export { MobileNumber };
