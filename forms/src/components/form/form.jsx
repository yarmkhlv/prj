import { useState } from 'react';

import { FullName } from '../full_name/full_name.jsx';
import { DateBirth } from '../date_birth/date_birth.jsx';
import { MobileNumber } from '../mobile_number/mobile_number.jsx';
import { Gender } from '../gender/gender.jsx';
import { GroupOfClients } from '../group_of_clients/group_of_clients.jsx';
import { Therapist } from '../therapist/therapist.jsx';
import { CheckMessage } from '../do_not_send_message/do_not_send_message.jsx';

import './form.css';

function Form() {
  const [fullName, setFullName] = useState({ value: '' });
  const [dateBirth, setDateBirth] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gender, setGender] = useState(null);
  const [groupOfClients, setGroupOfClients] = useState(null);
  const [therapist, setTherapist] = useState(null);
  const [doNotSendMessage, setDoNotSendMessage] = useState(false);

  const [validationFullName, setValidationFullName] = useState(false);
  const [validationDateBirth, setValidationDateBirth] = useState(false);
  const [validationMobileNumber, setValidationMobileNumber] = useState(false);
  const [validationGender, setValidationGender] = useState(false);

  const isBtnSubmitDisabled =
    validationFullName &&
    validationDateBirth &&
    validationMobileNumber &&
    validationGender;

  const createClient = (event) => {
    event.preventDefault();
    alert('Клиент создан');
    (function clear() {
      setFullName({ value: '' });
      setDateBirth('');
      setMobileNumber(null);
      setGender(null);
      setGroupOfClients(null);
      setTherapist(null);
      setDoNotSendMessage(false);

      setValidationFullName(false);
      setValidationDateBirth(false);
      setValidationMobileNumber(false);
      setValidationGender(false);
    })();
  };

  return (
    <form className="form" onSubmit={createClient}>
      <h1 className="form_title">Форма клиента поликлиники</h1>
      <FullName
        fullName={fullName}
        setFullName={setFullName}
        validationFullName={validationFullName}
        setValidationFullName={setValidationFullName}
      />
      <DateBirth
        dateBirth={dateBirth}
        setDateBirth={setDateBirth}
        validationDateBirth={validationDateBirth}
        setValidationDateBirth={setValidationDateBirth}
      />
      <MobileNumber
        mobileNumber={mobileNumber}
        setMobileNumber={setMobileNumber}
        validationMobileNumber={validationMobileNumber}
        setValidationMobileNumber={setValidationMobileNumber}
      />
      <Gender
        gender={gender}
        setGender={setGender}
        validationGender={validationGender}
        setValidationGender={setValidationGender}
      />
      <GroupOfClients
        groupOfClients={groupOfClients}
        setGroupOfClients={setGroupOfClients}
      />
      <Therapist therapist={therapist} setTherapist={setTherapist} />
      <CheckMessage
        doNotSendMessage={doNotSendMessage}
        setDoNotSendMessage={setDoNotSendMessage}
      />
      <button
        disabled={!isBtnSubmitDisabled}
        className="form__submit"
        type="submit"
      >
        Создать клиента
      </button>
    </form>
  );
}

export { Form };
