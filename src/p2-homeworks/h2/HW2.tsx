import React, {useState} from "react";
import Affairs from "./Affairs";

// types
export type AffairType = {
    _id: number
    name: string
    priority: string
};
export type FilterType = "all" | "low" | "middle" | "high";

function HW2() {
    let [defaultAffairs, setAffair] = useState<Array<AffairType>>([ // need to fix any
        {_id: 1, name: " Обучение в it-инкубаторе ", priority: "high"},
        {_id: 2, name: " Хобби(творчество) ", priority: "low"},
        {_id: 3, name: " Чтение книг ", priority: "low"},
        {_id: 4, name: " Семейные обязанности ", priority: "high"},
        {_id: 5, name: " Занятие спортом ", priority: "middle"},
    ]);

    let [filter, setFilter] = useState<FilterType>("all");

    const deleteAffair = (_id: number) => { // need to fix any
        let filteredAffairs = defaultAffairs.filter((affair: AffairType) => affair._id !== _id)// need to fix
        setAffair(filteredAffairs);
    }

    function filterAffairs(value: FilterType) {
        setFilter(value);
    }

    let filteredAffairs = defaultAffairs;
    if (filter === "high") {
        filteredAffairs = defaultAffairs.filter(a => a.priority === "high")
    }
    if (filter === "middle") {
        filteredAffairs = defaultAffairs.filter(a => a.priority === "middle")
    }
    if (filter === "low") {
        filteredAffairs = defaultAffairs.filter(a => a.priority === "low")
    }

    return (
        <div>
            <hr/>
            homeworks 2
            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                filterAffairs={filterAffairs}
                deleteAffair={deleteAffair}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    );
}

export default HW2;