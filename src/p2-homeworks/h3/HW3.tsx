import React, {useState} from "react";
import GreetingContainer from "./GreetingContainer";
import s from "./Greeting.module.css";
import {v1} from "uuid";


// types
export type UserType = {
    _id: string // need to fix any
    name: string // need to fix any

}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([
        /*  {_id:v1(), name:""}*/
    ]); // need to fix any
    const addUserCallback = (user: UserType) => { // need to fix any
        let newUser = user
        let newUsers: UserType[] = [newUser, ...users]

        setUsers(newUsers); // need to fix
    }
    let mappedAffairs = users.map((user, index) => (
        <li key={index}>Добро пожаловать {user} ! </li>))

    return (
        <div className={s.someClass}>
            <hr/>
            homeworks 3
            {/*should work (должно работать)*/}
            <GreetingContainer
                users={users}
                addUserCallback={addUserCallback}/>
            <ul>{mappedAffairs}</ul>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    );
}

export default HW3;
