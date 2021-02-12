import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";
import styles from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if(onChangeOption)
        { onChangeOption(e.currentTarget.value)}
        // onChange, onChangeOption
    }

    const mappedOptions: any[] = options ? options.map((o, i) => ( 
        // map options with key
       <label className={styles.labelRadio} key={name + "-" + i}>
            
            <input className={styles.inputRadio} {...restProps}
                type={"radio"}
                value={value}
                name={name}
                onChange={onChangeCallback}  
                // name, checked, value, onChange                    
            />
            {o}
        </label>
    )) : [];

    return (
        <div className={styles.radioList}>
            {mappedOptions}  
        </div>
    );
}

export default SuperRadio;