import { FullName } from "../full_name/full_name.jsx";
import { DateBirth } from "../date_birth/date_birth.jsx";
import { MobileNumber } from "../mobile_number/mobile_number.jsx";
import { Gender } from "../gender/gender.jsx";
import { GroupOfClients } from "../group_of_clients/group_of_clients.jsx";

import './form.css';

function Form() {
    return (
        <form className="form">
            <FullName></FullName>
            <DateBirth></DateBirth>
            <MobileNumber></MobileNumber>
            <Gender></Gender>
            <GroupOfClients></GroupOfClients>
        </form>
    )
}

export {Form}