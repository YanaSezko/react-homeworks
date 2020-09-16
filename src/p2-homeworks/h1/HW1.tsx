import React from "react";
import Message from "./Message";
import AlternativeMessage from "./AlternativeMessage";

export type messageDataType = {
    avatar: string
    name: string
    message:string
    time:string

}

const messageData = {
    avatar: "https://cdn.icon-icons.com/icons2/2121/PNG/512/avatar_woman_female_girl_people_icon_131282.png",
    name: "Яна Сезько",
    message: "ДЗ №1",
    time: "22:00",
};
const messageData1 = {
    avatar: "https://cdn.icon-icons.com/icons2/2121/PNG/512/boy_child_man_male_people_avatar_icon_131270.png",
    name: "Иван Иванов",
    message: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eligendi esse " +
        "excepturi in iste iure natus nostrum nulla optio, perferendis quo quos ratione sit soluta " +
        "sunt tenetur vel veritatis voluptate.",
    time: "22:05",
};


function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            {/*  should work (должно работать)*/}

            <Message
                     avatar={messageData.avatar}
                     name={messageData.name}
                     message={messageData.message}
                     time={messageData.time}
            />

            {/* <hr/>*/}
            {/* для личного творчества, могу проверить*/}
            <AlternativeMessage
                                avatar={messageData1.avatar}
                                name={messageData1.name}
                                message={messageData1.message}
                                time={messageData1.time}
            />
            <hr/>
        </div>
    );
}

export default HW1;
