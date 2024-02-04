import React, { useState, useRef, useEffect } from 'react';
import { func } from '../../../helper/import';
import ToolTemplate from '../template';
import beepMp3 from '../../../assets/3beeps-108353.mp3';
function Timer(props) {
    const audio = new Audio(beepMp3);
    const timerRef = useRef("");
    const progressRef = useRef("");
    const intervalRef = useRef("");
    const startButtonRef = useRef("");
    const initialState = {
        hour: 0,
        minute: 2,
        second: 0,
        type: 'reset',
        totalSecondsPaused: 0
    };
    const [state, setState] = useState({ ...initialState });
    // useEffect(() => {
    //     console.log('111', 111)
    //     !!intervalRef.current && clearInterval(intervalRef.current);
    // }, [state.hour, state.minute, state.second]);
    let totalSeconds = ((state.hour * 60 * 60) + (state.minute * 60) + state.second);
    let currentSeconds = useRef(totalSeconds - state.totalSecondsPaused);
    const _handleTimer = (type) => {
        if (type === 'start') {
            startButtonRef.current.className = startButtonRef.current.className.replace("success", "danger");
            if (state.type === 'reset') {
                progressRef.current.firstChild.style.width = `100%`;
                timerRef.current.innerHTML = new Date(currentSeconds.current * 1000).toISOString().slice(11, 19);
                currentSeconds.current--;
            }
            intervalRef.current = setInterval(() => {
                const progress = (currentSeconds.current / totalSeconds) * 100;
                timerRef.current.innerHTML = new Date(currentSeconds.current * 1000).toISOString().slice(11, 19);
                progressRef.current.firstChild.style.width = `${progress}%`;
                if (currentSeconds.current <= 0) {
                    audio.play();
                    _handleReset();
                } else {
                    currentSeconds.current--;
                }
            }, 1000);
            setState(prev => ({ ...prev, type }));
        } else if (type === 'stop') {
            startButtonRef.current.className = startButtonRef.current.className.replace("danger", "success");
            clearInterval(intervalRef.current);
            setState(prev => ({ ...prev, type, totalSecondsPaused: currentSeconds.current }));
        } else if (type === 'reset') {
            _handleReset();
        }
    }
    const _handleReset = () => {
        progressRef.current.firstChild.style.width = `100%`;
        startButtonRef.current.className = startButtonRef.current.className.replace("danger", "success");
        timerRef.current.innerHTML = '00:00:00';
        currentSeconds.current = totalSeconds;
        clearInterval(intervalRef.current);
        setState(prev => ({ ...prev, type: 'reset', totalSecondsPaused: 0 }));
    }
    const _handleChange = ({ target: { value, name } }) => setState(prev => ({ ...prev, [name]: +value, totalSecondsPaused: 0 }));
    return <ToolTemplate {...props}>
        <div className="row tool-bg p-5 rounded mb-5 justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                <div className="form-group">
                    <label for="tm-h">Select time(hh:mm:ss)</label>
                    <div className='row'>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="form-group">
                                <label className="mb-0" for="tm-h">Hour</label>
                                <select class="custom-select" id="tm-h" name='hour' value={state.hour} onChange={_handleChange} disabled={state.type !== 'reset'}>
                                    {func._fillArray(24, -1).map(hh => <option value={hh}>{`${hh}`.length === 1 ? `0${hh}` : hh}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="form-group">
                                <label className="mb-0" for="tm-m">Minute</label>
                                <select class="custom-select" id="tm-m" name='minute' value={state.minute} onChange={_handleChange} disabled={state.type !== 'reset'}>
                                    {func._fillArray(60, -1).map(mm => <option value={mm}>{`${mm}`.length === 1 ? `0${mm}` : mm}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4">
                            <div className="form-group">
                                <label className="mb-0" for="tm-s">Second</label>
                                <select class="custom-select" id="tm-s" name='second' value={state.second} onChange={_handleChange} disabled={state.type !== 'reset'}>
                                    {func._fillArray(60, -1).map(ss => <option value={ss}>{`${ss}`.length === 1 ? `0${ss}` : ss}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <p className="display-1" ref={timerRef}>00:00:00</p>
                    <div class="progress mb-3" ref={progressRef} style={{ height: '5px' }}>
                        <div class="progress-bar bg-info" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="text-center">
                    <button ref={startButtonRef} onClick={() => _handleTimer(state.type === 'start' ? 'stop' : 'start')} className="badge badge-success p-2 mr-3">{state.type === 'start' ? 'Stop' : 'Start'}</button>
                    <button onClick={() => _handleTimer('reset')} className="badge badge-secondary p-2">Reset</button>
                </div>
            </div>
        </div>
    </ToolTemplate>
}
export default Timer;