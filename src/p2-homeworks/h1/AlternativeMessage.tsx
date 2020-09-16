import React from "react";
import s from "./AlternativeMessage.module.css";
import {messageDataType} from "./HW1";


function AlternativeMessage(props: messageDataType) {
    return (
        <div className={s.wrapper}>
            <div className={s.message}>
                <div>
                    <h4>{props.name}</h4>
                    <p>{props.message}</p>
                </div>
                <p className={s.time}>{props.time}</p>
            </div>
            <div><img width={72} height={72} src={props.avatar} alt="avatar"/></div>
        </div>
    );
}

export default AlternativeMessage;
