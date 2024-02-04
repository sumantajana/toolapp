import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import featureBg_2 from "../../assets/images/background-shape/feature-bg-2.png";
import featureBg_1 from "../../assets/images/background-shape/feature-bg-1.png";
import dataSet from './data.json';
import HomeLayout from '../layout/homeLayout';
function WrapComponent({ isIncludeLayout = false, children }) {
    return isIncludeLayout ? <HomeLayout>{children}</HomeLayout> : children;
}
function ToolsIndex(props) {
    const componentRef = useRef("");
    return <WrapComponent {...props}>
        <section ref={props.componentRef || componentRef} className="section feature mb-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-title">Awesome Tools</h2>
                        <p className="mb-100">Streamline your workflow with our collection of efficient and user-friendly tools</p>
                    </div>
                    {dataSet.map(({ title, icon, description, link }, inx) => {
                        return <div className="col-md-6 mb-80" key={inx}>
                            <div className="d-flex feature-item">
                                <div>
                                    <i className={`fa fa-${icon} feature-icon mr-4`} aria-hidden="true"></i>
                                </div>
                                <Link to={link ? `/tools/${link}` : "#"}>
                                    <h4>{title}</h4>
                                    <p className='text-justify'>{description}</p>
                                </Link>
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <img className="feature-bg-1 up-down-animation" src={featureBg_1} alt="bg-shape" />
            <img className="feature-bg-2 left-right-animation" src={featureBg_2} alt="bg-shape" />
        </section>
    </WrapComponent>
}
export default ToolsIndex;