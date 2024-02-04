import React, { useEffect, useRef } from 'react';
import { func, Validation } from '../helper/import';
function CInput(props) {
    const inputRef = useRef(null);
    const { className = "form-control", divClassName = "form-group", labelClassName = "", value, fieldRule = {}, isError = false, ...restAttr } = props;
    const { title, type = "text" } = fieldRule;
    const attr = { ...restAttr, type, className, placeholder: `Enter ${title}`, ref: inputRef };
    useEffect(() => {
        attr.value = value;
    }, [value]);
    if (!!props.onChange) {
        attr.onChange = func._debounce(function (event) {
            const { target: { value, name } } = event;
            props.onChange({ [name]: value.trim() });
        }, 500);
    }
    return <div className={divClassName}>
        <label className={labelClassName} onClick={() => inputRef.current.focus()}>{title}</label>
        <input {...attr} />
        {!!fieldRule && Object.keys(fieldRule) !== 0 && <Validation {...fieldRule} isError={isError} value={value} />}
    </div>
}
export default CInput;