import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ToolTemplate from '../template';
import Validation, { doValidate } from '../../../helper/commonValidation';
import moment from 'moment';
function GenerateLink(props) {
    const fieldRule = {
        name: { title: 'Name', type: 'default', minLength: 4, isRequired: true },
        date: { title: 'Date', type: 'default', isRequired: true }
    }
    const initialState = {
        fields: {
            name: "",
            date: new Date()
        },
        link: "",
        isValidationError: false
    };
    const [state, modifyState] = useState({ ...initialState });
    const { name, date } = state.fields;
    const _setState = value => modifyState(prevState => ({ ...prevState, ...value }));
    const _setFields = value => modifyState(prevState => ({ ...prevState, fields: { ...prevState.fields, ...value } }));
    const _generateLink = () => {
        const validationStatus = doValidate(state.fields, fieldRule);
        if (!!validationStatus) {
            _setState({ isValidationError: true, link: "" });
        } else {
            _setState({ isValidationError: false, link: `${window.location.origin}/birthday/${name}/${moment(date).format("M/D")}` });
        }
    }
    const _handleCopy = () => {
        navigator.clipboard.writeText(state.link);
    }
    return <ToolTemplate {...props}>
        <div className="row tool-bg p-5 rounded mb-5 justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                <div className="form-group">
                    <label for="name">Name</label>
                    <input className='form-control' id='name' onChange={({ target }) => _setFields({ name: target.value })} value={name} />
                    <Validation {...fieldRule.name} isError={state.isValidationError} value={name} />
                </div>
                <div className="form-group">
                    <label for="date">Select Date</label>
                    <label className='pull-right'>
                        <Link to="#" onClick={() => _setFields({ date: new Date() })}>Today</Link>
                    </label>
                    <DatePicker
                        id='date'
                        showIcon
                        showMonthDropdown
                        disableYearPicker
                        dropdownMode="select"
                        selected={date}
                        onChange={(date) => _setFields({ date })}
                        dateFormat="do MMMM"
                        className="form-control"
                        popperClassName="remove-datepicker-heder"
                    />
                    <Validation {...fieldRule.date} isError={state.isValidationError} value={date} />
                </div>
                <button onClick={_generateLink} className="btn btn-secondary mt-2">Generate Link</button>
                <Link to="#" onClick={() => _setState({ ...initialState })} className='pull-right mt-3 text-muted' title='Refresh Result'>
                    <i class="fa fa-refresh fa-2x" aria-hidden="true"></i>
                </Link>
            </div>
            {!!state.link &&
                <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                    <label>Generated Link</label>
                    <p className='mb-0 text-primary'>{state.link}</p>
                    <a href={state.link} target='_blank' className='badge badge-info mr-2 p-1 pl-2 pr-2 font-weight-normal'>
                        <i className="fa fa-link mr-1" aria-hidden="true"></i>
                        Visit Link
                    </a>
                    <Link to="#" onClick={_handleCopy} className="badge badge-secondary p-1 mr-2" title='Copy this Link'>
                        <i className="fa fa-copy" aria-hidden="true"></i>
                    </Link>
                    <a href={`whatsapp://send?text=${state.link}`} className="badge badge-success p-1" data-action="share/whatsapp/share" target="_blank" title=' Share via Whatsapp'>
                        <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    </a>
                </div>
            }
        </div>
    </ToolTemplate>
};
export default GenerateLink;