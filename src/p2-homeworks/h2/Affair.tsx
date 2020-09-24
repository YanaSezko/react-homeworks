import React from "react";
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffair: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    return (
        <div className={s.item}>
            <p>{props.affair._id}.{props.affair.name}
                <button onClick={() => {
                    props.deleteAffair(props.affair._id)
                }}>X</button>
            </p>
        </div>
    );
}

export default Affair;
