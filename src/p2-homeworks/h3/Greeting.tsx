import React, { ChangeEvent } from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void// need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
}
// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    { name, setNameCallback, addUser, error, totalUsers } // деструктуризация пропсов
) => {

    return (
        <div>
            <input placeholder={"Введите имя"} value={name} onChange={setNameCallback}
                className={error ? s.error : ""} />
            <button onClick={addUser}>+</button>
            <span>{totalUsers}</span>
            {error && <p>{error}</p>}
        </div>
    );
}

export default Greeting;
