import './gender.css';

function Gender({ gender, setGender }) {
  const handlerCheckGender = (event) => {
    setGender(event.currentTarget.value);
  };

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
