import { useState } from "react";

import { FullName } from "../full_name/full_name.jsx";
import { DateBirth } from "../date_birth/date_birth.jsx";
import { MobileNumber } from "../mobile_number/mobile_number.jsx";
import { Gender } from "../gender/gender.jsx";
import { GroupOfClients } from "../group_of_clients/group_of_clients.jsx";
import { Therapist } from "../therapist/therapist.jsx";
import { CheckMessage } from "../do_not_send_message/do_not_send_message.jsx";

import './form.css';

function Form() {

    const [fullName, setFullName] = useState('');
    const [dateBirth, setDateBirth] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [gender, setGender] = useState('');
    const [groupOfClients, setGroupOfClients] = useState('');
    const [therapist, setTherapist] = useState('');
    const [doNotSendMessage, setDoNotSendMessage] = useState(false);
    console.log({
        fullName,
        dateBirth,
        mobileNumber,
        gender,
        groupOfClients,
        therapist,
        doNotSendMessage
    })
    return (
        <form className="form">
            <FullName fullName={fullName} setFullName={setFullName}></FullName>
            <DateBirth dateBirth={dateBirth} setDateBirth={setDateBirth}></DateBirth>
            <MobileNumber mobileNumber={mobileNumber} setMobileNumber={setMobileNumber}></MobileNumber>
            <Gender setGender={setGender}></Gender>
            <GroupOfClients groupOfClients={groupOfClients} setGroupOfClients={setGroupOfClients}></GroupOfClients>
            <Therapist therapist={therapist} setTherapist={setTherapist}></Therapist>
            <CheckMessage doNotSendMessage={doNotSendMessage} setDoNotSendMessage={setDoNotSendMessage}></CheckMessage>
        </form>
    )
}

export {Form}