import React from "react";
import s from "./Message.module.css"
import {messageDataType} from "./HW1";


function Message(props: messageDataType) {
    debugger
    return (
        <div className={s.wrapper}>
            <p><img width={72} height={72} src={props.avatar} alt="avatar"/></p>
            <div className={s.message}>
                <div>
                    <h4>{props.name}</h4>
                    <p>{props.message}</p>
                </div>
                <p className={s.time}>{props.time}</p>
            </div>

        </div>
    );
}

export default Message;
