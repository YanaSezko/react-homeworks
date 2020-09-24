import React from "react";
import Affair from "./Affair";
import {AffairType, FilterType} from "./HW2";
import s from "./Affairs.module.css"

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffair={props.deleteAffair}
        />
    ))
    return (
        <div  className={s.someClass}>
            {mappedAffairs}
            <button onClick={() => {
                props.filterAffairs("all")
            }}>All
            </button>
            <button onClick={() => {
                props.filterAffairs("high")
            }}>High
            </button>
            <button onClick={() => {
                props.filterAffairs("middle")
            }}>Middle
            </button>
            <button onClick={() => {
                props.filterAffairs("low")
            }}>Low
            </button>
        </div>
    );
}

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    filterAffairs: (value: FilterType) => void
    deleteAffair: (_id: number) => void
}
export default Affairs;
