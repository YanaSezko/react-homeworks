import React, {ChangeEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";


type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (value: any) => void  // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// class ChangeEvent<T> {
// }

// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(""); // need to fix any
    const [error, setError] = useState<string | null>(null); // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value)
        setError(null)
    };

    const addUser = () => {
        if (name.trim() !== "") {
            addUserCallback(name.trim())
            setName("")
        } else setError("Поле не должно быть пустым!ОШИБКА!")

        // need to fix
    };
    const totalUsers = users.length; // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
