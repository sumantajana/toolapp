import React from 'react';
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function Validation({ value, type, isRequired, title, minLength, isError, regex }) {
    let errorMessage = '';
    if (!!isRequired && (value === '' || value === null))
        errorMessage = `Please enter the value for ${title}`;
    else if (!!value && !!regex && regex.test(value))
        errorMessage = `Please enter a valid ${title}`;
    else if (!!value && !!minLength && value.length < minLength)
        errorMessage = `Please enter at least ${minLength} chars for ${title}`;
    else
        switch (type) {
            case 'email':
                if (!emailRegex.test(String(value).toLowerCase()))
                    errorMessage = `Please enter a valid Email`;
                break;
            default:
        }
    return isError && !!errorMessage ? <p className='text-danger small mt-1 mb-0'>{`--${errorMessage}`}</p> : null
}
export function doValidate(field, fieldRule) {
    let isError = false
    if (!!field && Object.keys(field).length !== 0 && !!fieldRule && Object.keys(fieldRule).length !== 0) {
        Object.keys(fieldRule).forEach(fieldName => {
            const fieldValue = field[fieldName];
            const { type, isRequired, minLength, regex } = fieldRule[fieldName];
            if (!!isRequired && (fieldValue === '' || fieldValue === null))
                isError = true;
            else if (!!fieldValue && !!regex && regex.test(fieldValue))
                isError = true;
            else if (!!fieldValue && !!minLength && fieldValue.length < minLength)
                isError = true;
            else
                switch (type) {
                    case 'email':
                        if (!emailRegex.test(String(fieldValue).toLowerCase()))
                            isError = true;
                        break;
                    default:
                }
        })
    }
    return isError;
}
export default Validation;