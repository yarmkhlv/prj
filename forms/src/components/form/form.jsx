import { FullName } from "../full_name/full_name";
import { DateBirth } from "../date_birth/date_birth";
import { MobileNumber } from "../mobile_number/mobile_number";
import { Gender } from "../gender/gender";
import { GroupOfClients } from "../group_of_clients/group_of_clients";

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