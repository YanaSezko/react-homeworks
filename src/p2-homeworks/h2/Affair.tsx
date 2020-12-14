import React from "react";
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffair: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    return (
        <div>
            <p>{props.affair._id}.{props.affair.name}
                <SuperButton red onClick={() => {
                    props.deleteAffair(props.affair._id)
                }}>X</SuperButton>
            </p>
        </div>
    );
}

export default Affair;
