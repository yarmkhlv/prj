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
  const [fullName, setFullName] = useState('');
  const [dateBirth, setDateBirth] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [gender, setGender] = useState('');
  const [groupOfClients, setGroupOfClients] = useState(null);
  const [therapist, setTherapist] = useState(null);
  const [doNotSendMessage, setDoNotSendMessage] = useState(false);
  // console.log({
  //   fullName,
  //   dateBirth,
  //   mobileNumber,
  //   gender,
  //   groupOfClients,
  //   therapist,
  //   doNotSendMessage,
  // });
  return (
    <form className="form">
      <FullName fullName={fullName} setFullName={setFullName} />
      <DateBirth dateBirth={dateBirth} setDateBirth={setDateBirth} />
      <MobileNumber
        mobileNumber={mobileNumber}
        setMobileNumber={setMobileNumber}
      />
      <Gender setGender={setGender} />
      <GroupOfClients
        groupOfClients={groupOfClients}
        setGroupOfClients={setGroupOfClients}
      />
      <Therapist therapist={therapist} setTherapist={setTherapist} />
      <CheckMessage
        doNotSendMessage={doNotSendMessage}
        setDoNotSendMessage={setDoNotSendMessage}
      />
      <button className="form__submit" type="submit">
        Отправить
      </button>
    </form>
  );
}

export { Form };
