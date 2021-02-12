import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import styles from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions:JSX.Element[] | undefined = options?.map((el,index)=>{
        return <option key={index}>{el}</option>
    }); // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption(e.currentTarget.value)
        // onChange, onChangeOption
    }

    return (
        <select className={styles.select} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    );
}

export default SuperSelect;
