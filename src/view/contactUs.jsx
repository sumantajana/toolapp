import React, { useState } from 'react';
import HomeLayout from './layout/homeLayout';
import Validation, { doValidate } from '../helper/commonValidation';
import { fieldRule, initialField, initialState } from './config.js';
function ContactUs(props) {
    const [field, setField] = useState(initialField);
    const [state, setState] = useState(initialState);
    const _handleChange = event => {
        setField({ ...field, [event.target.name]: event.target.value })
    }
    const _handleSubmit = () => {
        const validationStatus = doValidate(field, fieldRule);
        if (!!validationStatus) {
            setState({ ...state, isValidationError: true });
        } else {
            setState({ ...state, isValidationError: false });
        }
    }
    return <HomeLayout {...props}>
        <section className="section-ml tool">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-title">Contact</h2>
                    </div>
                </div>
                <div class="row contact-bg p-5 rounded mb-5">
                    <div class="col-lg-7 mb-4 mb-lg-0">
                        <input type="text" class="form-control mb-3" id="name" name="name" value={field.name} onChange={_handleChange} placeholder="Your Name" />
                        <Validation {...fieldRule.name} isError={state.isValidationError} value={field.name} />
                        <input type="text" class="form-control mb-3" id="email" name="email" value={field.email} onChange={_handleChange} placeholder="Your Email" />
                        <Validation {...fieldRule.email} isError={state.isValidationError} value={field.email} />
                        <input type="text" class="form-control mb-3" id="subject" name="subject" value={field.subject} onChange={_handleChange} placeholder="Subject" />
                        <Validation {...fieldRule.subject} isError={state.isValidationError} value={field.subject} />
                        <textarea name="message" value={field.message} onChange={_handleChange} id="message" class="form-control mb-3" placeholder="Your Message"></textarea>
                        <Validation {...fieldRule.message} isError={state.isValidationError} value={field.message} />
                        <button value="send" class="btn btn-secondary" onClick={_handleSubmit}>SEND MESSAGE</button>
                    </div>
                    <div class="col-lg-5">
                        <p class="mb-5 text-justify">If you'll like to know more about our experience designing and delivering cloud solutions, or get advice on your own technology challenges get in touch. With dedicated engineers on-hand 24/7,      we’re set up to become an extension of your team.</p>
                        {false &&
                            <>
                                <a href="tel:+442081446356" class="text-color h5 d-block">+44 20 8144 6356</a>
                                <a href="mailto:info@altostack.io" class="mb-5 text-color h5 d-block">info@altostack.io</a>
                                <p>71 Shelton Street<br />London WC2H 9JQ England</p>
                            </>
                        }
                    </div>
                </div>
            </div>
        </section>
    </HomeLayout >
}
export default ContactUs;