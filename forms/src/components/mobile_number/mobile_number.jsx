import { IMaskInput } from 'react-imask';

function MobileNumber({ mobileNumber, setMobileNumber }) {
  const handerChangerMobileNumber = (event) => {
    setMobileNumber(event.target.value);
  };

  return (
    <div className="mini-block">
      <label className="mini-block__label" htmlFor="phone">
        Номер телефона
      </label>
      <IMaskInput
        required
        className="mini-block__input"
        value={mobileNumber}
        onBlur={handerChangerMobileNumber}
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
