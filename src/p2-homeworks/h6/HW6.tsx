import React, { useState } from "react";
import SuperEditableSpan from "./common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { restoreState, saveState } from "./localStorage/localStorage";
import s from "./HW6.module.css"

function HW6() {
    const [value, setValue] = useState<string>("");

    const save = () => {
        saveState<string>("editable-span-value", value);
    };
    const restore = () => {
        // setValue();     
        const value: string = restoreState<string>("editable-span-value", "")
        setValue(value)
    };

    return (
        <div className={s.hw}>
            <hr />
            homeworks 6

            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{ children: value ? undefined : " tap here twice " }}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton red onClick={restore}>restore</SuperButton>

            <hr />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr />
        </div>
    );
}

export default HW6;
