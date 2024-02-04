import React, { useState, useEffect } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import moment from 'moment';
function BirthdayWish() {
    const params = useParams()
    const { name, day, month } = params;
    const currentYear = new Date().getFullYear();
    const startDate = moment(`${currentYear}-${month}-${day}`);
    const initialState = {
        seconds: 0,
        hours: 0,
        minutes: 0,
        days: 0,
        isBirthday: startDate.format("YYYY-MMMM-DD") === moment().format("YYYY-MMMM-DD"),
        nextBirthday: new Date()
    };
    const [state, setState] = useState({ ...initialState });
    useEffect(() => {
        setInterval(() => {
            if (startDate.format("YYYY-MMMM-DD") === moment().format("YYYY-MMMM-DD")) {
                setState({ ...initialState, isBirthday: true, nextBirthday: new Date() });
            } else {
                const isSameOrAfter = moment(startDate.format("YYYY-MM-DD")).isSameOrAfter(moment().format("YYYY-MM-DD"), 'day');
                const nextDate = moment(isSameOrAfter ? startDate : moment(startDate).add(1, 'Y')._d).subtract(1, 'd').format('DD MMMM YYYY') + ' 11:59:59 pm';
                const diff = moment().diff(nextDate);
                const different = moment.duration(diff);
                let seconds = parseInt(different.asSeconds(), 10) * -1;
                let minutes = Math.floor(seconds / 60);
                let hours = Math.floor(minutes / 60);
                let days = Math.floor(hours / 24);
                seconds %= 60;
                minutes %= 60;
                hours %= 24;
                setState((prevState) => ({ ...prevState, seconds, minutes, hours, days, isBirthday: false, nextBirthday: nextDate }));
            }
        }, 1000);
    }, [day, state.isBirthday, month]);
    if (!name || !day || !month)
        return <Navigate to="/tools/birthday-wisher" />
    else
        return <div className='page birthday-section'>
            {!!state.isBirthday ?
                <div className='wish-message'>
                    HAPPY BIRTHDAY <span className='highlight'>{name.toUpperCase()}</span> !!!
                </div>
                :
                <>
                    <div>
                        <h1 className='heading'>
                            Countdown to <span className='highlight'>{name}'s</span> Birthday
                        </h1>
                        <div className='countdown-wrapper'>
                            <div className='countdown-box'>
                                {state.days}
                                <span className='legend'>Days</span>
                            </div>
                            <div className='countdown-box'>
                                {state.hours}
                                <span className='legend'>Hours</span>
                            </div>
                            <div className='countdown-box'>
                                {state.minutes}
                                <span className='legend'>Minutes</span>
                            </div>
                            <div className='countdown-box'>
                                {state.seconds}
                                <span className='legend'>Seconds</span>
                            </div>
                        </div>
                    </div>
                    <div className='birth-date'>
                        Birthdate: {moment(state.nextBirthday).add(1, 'd').format("Do MMMM, YYYY")}
                    </div>
                    <Link to='/birthday-wisher'>Generate Here</Link>
                </>
            }
        </div>
};
export default BirthdayWish;