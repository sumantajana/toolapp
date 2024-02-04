import { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ToolTemplate from '../template';
function AgeCalculator(props) {
    const initialState = {
        startDate: new Date(),
        endDate: new Date(),
        calculateResult: "",
        different: "",
        operationType: "-"
    };
    const [state, modifyState] = useState({ ...initialState });
    const _setState = value => modifyState(prevState => ({ ...prevState, ...value }));
    const _handleCalculate = () => {
        let different = "";
        if (!!state.endDate && !!state.startDate) {
            const startDate = moment(state.startDate);
            const endDate = moment(state.endDate);
            const diff = endDate.diff(startDate);
            different = moment.duration(diff);
        }
        _setState({ different });
    }
    const totalDays = !!state.different ? parseInt(state.different.asDays(), 10) : 0;
    return <ToolTemplate {...props}>
        <div className="row tool-bg p-5 rounded mb-5 justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                <div className="form-group">
                    <label for="stringBox">Start Date</label>
                    <label className='pull-right'>
                        <Link to="#" onClick={() => _setState({ startDate: new Date() })}>Today</Link>
                    </label>
                    <DatePicker
                        showIcon
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        selected={state.startDate}
                        onChange={(date) => _setState({ startDate: date })}
                        showTimeSelect
                        dateFormat="MMMM d, yyyy h:mm aa"
                        className="form-control"
                    />
                </div>
                {/* <div className="form-group mb-0">
                            <label for="operationType" className='mr-1'>Select Operation</label>
                            <select id="operationType" name="type" onChange={({ target }) => _setState({ operationType: target.value })}>
                                <option value="-">(-) Subtract</option>
                                <option value="+">(+) Addition</option>
                            </select>
                        </div> */}
                <div className="form-group">
                    <label for="stringBox">End Date</label>
                    <label className='pull-right'>
                        <Link to="#" onClick={() => _setState({ endDate: new Date() })}>Today</Link>
                    </label>
                    <DatePicker
                        showIcon
                        showMonthDropdown
                        showYearDropdown
                        dropdownMode="select"
                        selected={state.endDate}
                        onChange={(date) => _setState({ endDate: date })}
                        showTimeSelect
                        dateFormat="MMMM d, yyyy h:mm aa"
                        className="form-control"
                    />
                </div>
                <button onClick={_handleCalculate} className="btn btn-secondary mt-2">Calculate</button>
                <Link to="#" onClick={() => _setState({ ...initialState })} className='pull-right mt-3 text-muted' title='Refresh Result'>
                    <i class="fa fa-refresh fa-2x" aria-hidden="true"></i>
                </Link>
            </div>
            {!!state.different &&
                <div className="col-lg-6 col-md-6 col-sm-6 mb-4">
                    <h5>Age:</h5>
                    <div className="form-group mb-0">
                        <label className="col-form-label mr-1">{state.different.years()} years {state.different.months()} months {state.different.days()} days</label>
                    </div>
                    <div className="form-group mb-0">
                        <label className="col-form-label mr-1">or {parseInt(state.different.asMonths(), 10)} months {state.different.days()} days</label>
                    </div>
                    <div className="form-group mb-0">
                        <label className="col-form-label mr-1">or {parseInt(totalDays / 7)} weeks {parseInt(totalDays % 7)} days</label>
                    </div>
                    <div className="form-group mb-0">
                        <label className="col-form-label mr-1">or {totalDays} days</label>
                    </div>
                    <div className="form-group mb-0">
                        <label className="col-form-label mr-1">or {parseInt(state.different.asHours(), 10)} hours</label>
                    </div>
                    <div className="form-group mb-0">
                        <label className="col-form-label mr-1">or {parseInt(state.different.asMinutes(), 10)} minutes</label>
                    </div>
                    <div className="form-group mb-0">
                        <label className="col-form-label mr-1">or {parseInt(state.different.asSeconds(), 10)} seconds</label>
                    </div>
                </div>
            }
        </div>
    </ToolTemplate >
}
export default AgeCalculator;