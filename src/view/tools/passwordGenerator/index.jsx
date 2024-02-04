import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { commonConfig } from '../../../helper/import';
import ToolTemplate from '../template';
import { Store } from 'react-notifications-component';
function PasswordGenerator(props) {
    const alertConfig = {
        insert: "top",
        container: "top-center",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 4000,
            onScreen: true,
            showIcon: true
        }
    };
    const initialState = {
        password: "",
        characterLength: 16,
        isIncludeUpperCase: true,
        isIncludeLowerCase: true,
        isIncludeNumbers: false,
        isIncludeSymbols: false,
        notifyMessage: "",
        notifyType: ""
    };
    const [state, setState] = useState({ ...initialState });
    const _generatePassword = () => {
        if (!state.isIncludeUpperCase && !state.isIncludeLowerCase && !state.isIncludeNumbers && !state.isIncludeSymbols) {
            setState(prev => ({ ...prev, password: "", notifyMessage: "To generate password you must select at least one checkbox!", notifyType: "danger" }));
        } else {
            let characterList = "", password = "";
            if (state.isIncludeNumbers) characterList += commonConfig.numbers;
            if (state.isIncludeUpperCase) characterList += commonConfig.upperCaseLetters;
            if (state.isIncludeLowerCase) characterList += commonConfig.lowerCaseLetters;
            if (state.isIncludeSymbols) characterList += commonConfig.specialCharacters;
            for (let i = 0; i < state.characterLength; i++) {
                const characterIndex = Math.round(Math.random() * characterList.length);
                password += characterList.charAt(characterIndex);
            }
            setState(prev => ({ ...prev, password, notifyMessage: "Password is generated successfully!", notifyType: "success" }));
        }
    }
    const _handleChange = ({ target: { value, checked, type, name } }) => {
        let selectedValue;
        if (type === "checkbox") {
            selectedValue = checked;
        } else {
            selectedValue = !!value ? value.replace(/[^0-9]/g, '') : "";
        }
        setState(prev => ({ ...prev, [name]: selectedValue }));
    }
    const _handleCopy = () => {
        navigator.clipboard.writeText(state.password);
        setState(prev => ({ ...prev, notifyMessage: "Password is copied to clipboard!", notifyType: "default" }));
    }
    useEffect(() => {
        if (!!state.notifyMessage && !!state.notifyType) {
            Store.addNotification({
                message: state.notifyMessage,
                type: state.notifyType,
                onRemoval: () => {
                    setState(prev => ({ ...prev, notifyMessage: "", notifyType: "" }));
                },
                ...alertConfig
            });
        }
    }, [state.notifyMessage, state.notifyType]);
    return <ToolTemplate {...props}>
        <div className="row tool-bg p-5 rounded mb-5 justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <div className="form-group">
                    <label for="characterLength">Password length</label>
                    <input className="form-control" value={state.characterLength} onChange={_handleChange} type="number" id="characterLength" name="characterLength" max="26" min="8" />
                </div>
                <div className="form-group">
                    <label htmlFor="isIncludeUpperCase" className='mr-1'>Include Uppercase Letters</label>
                    <input checked={state.isIncludeUpperCase} onChange={_handleChange} type="checkbox" id="isIncludeUpperCase" name="isIncludeUpperCase" />
                </div>
                <div className="form-group">
                    <label htmlFor="isIncludeLowerCase" className='mr-1'>Include Lowercase Letters</label>
                    <input checked={state.isIncludeLowerCase} onChange={_handleChange} type="checkbox" id="isIncludeLowerCase" name="isIncludeLowerCase" />
                </div>
                <div className="form-group">
                    <label htmlFor="isIncludeNumbers" className='mr-1'>Include Numbers</label>
                    <input checked={state.isIncludeNumbers} onChange={_handleChange} type="checkbox" id="isIncludeNumbers" name="isIncludeNumbers" />
                </div>
                <div className="form-group">
                    <label htmlFor="isIncludeSymbols" className='mr-1'>Include Symbols</label>
                    <input checked={state.isIncludeSymbols} onChange={_handleChange} type="checkbox" id="isIncludeSymbols" name="isIncludeSymbols" />
                </div>
                <button onClick={_generatePassword} className="btn btn-secondary w-100">Generate Password</button>
            </div>
            {!!state.password &&
                <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                    <label>Generated Password</label>
                    <Link to="#" onClick={() => setState({ ...initialState })} className='text-muted ml-2' title='Refresh Result'>
                        <i class="fa fa-refresh" aria-hidden="true"></i>
                    </Link>
                    <p>
                        <span className='text-success mr-1'>{state.password}</span>
                        <Link to="#" onClick={_handleCopy} className="badge badge-secondary">Copy</Link>
                    </p>
                </div>
            }
        </div>
    </ToolTemplate>
}
export default PasswordGenerator;