import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import featureBg_2 from "../../assets/images/background-shape/feature-bg-2.png";
import seoBall_1 from "../../assets/images/background-shape/seo-ball-1.png";
import seoHalfCycle from "../../assets/images/background-shape/seo-half-cycle.png";
import greenDot from "../../assets/images/background-shape/green-dot.png";
import blueHalfCycle from "../../assets/images/background-shape/blue-half-cycle.png";
import yellowTriangle from "../../assets/images/background-shape/yellow-triangle.png";
import teamBgTriangle from "../../assets/images/background-shape/team-bg-triangle.png";
import seoBall_2 from "../../assets/images/background-shape/seo-ball-2.png";
import HomeLayout from '../layout/homeLayout';
import Tools from '../tools/homeIndex';
import Validation, { doValidate } from '../../helper/commonValidation';
function HomeIndex(props) {
    const toolRef = useRef(null);
    const fieldRule = { email: { title: 'Email', type: 'email', isRequired: true } };
    const [state, setState] = useState({
        subscribeEmail: '',
        isValidationError: false
    });
    const _handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.value })
    }
    const _handleSubmit = () => {
        const validationStatus = doValidate({ subscribeEmail: state.subscribeEmail }, fieldRule);
        if (!!validationStatus) {
            setState({ ...state, isValidationError: true });
        } else {
            setState({ ...state, isValidationError: false });
        }
    }
    const _handleScrollTools = () => toolRef.current.scrollIntoView();
    return <HomeLayout {...props}>
        <section className="hero-section hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center zindex-1">
                        <h2 className="mb-3">Improve your Productivity with our Suite of</h2>
                        <h1 className="mb-3">Online Tools</h1>
                        <p className="mb-4">Discover the Wide Range of Tools Available on Our Platform and Boost Your Productivity Today!</p>
                        <Link to="#" onClick={_handleScrollTools} className="btn btn-secondary btn-lg page-scroll">explore now</Link>
                    </div>
                </div>
            </div>
            <div id="scene">
                <img className="img-fluid hero-bg-1 up-down-animation" src={featureBg_2} alt={null} />
                <img className="img-fluid hero-bg-2 left-right-animation" src={seoBall_1} alt={null} />
                <img className="img-fluid hero-bg-3 left-right-animation" src={seoHalfCycle} alt={null} />
                <img className="img-fluid hero-bg-4 up-down-animation" src={greenDot} alt={null} />
                <img className="img-fluid hero-bg-5 left-right-animation" src={blueHalfCycle} alt={null} />
                <img className="img-fluid hero-bg-6 up-down-animation" src={seoBall_1} alt={null} />
                <img className="img-fluid hero-bg-7 left-right-animation" src={yellowTriangle} alt={null} />
                <img className="img-fluid hero-bg-9 up-down-animation" src={teamBgTriangle} alt={null} />
            </div>
        </section>
        <Tools componentRef={toolRef} />
        {/* <section className="newsletter">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2>Subscribe to our newsletter</h2>
                        <p className="mb-5">Receive updates, news and deals</p>
                    </div>
                    <div className="col-lg-8 col-sm-10 col-12 mx-auto">
                        <div className="input-wrapper position-relative">
                            <input type="text" onChange={_handleChange} value={state.subscribeEmail} className="newsletter-form" id="newsletter" placeholder="Enter your email" />
                            <button type="button" onClick={_handleSubmit} className="btn newsletter-btn">subscribe</button>
                        </div>
                        <Validation {...fieldRule.email} isError={state.isValidationError} value={state.subscribeEmail} />
                    </div>
                </div>
            </div>
            <img className="newsletter-bg-shape left-right-animation" src={seoBall_2} alt="background-shape" />
        </section> */}
    </HomeLayout >
}
export default HomeIndex;