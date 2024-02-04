import React, { useEffect, useState } from 'react';
import { ReactNotifications } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import '../../assets/plugins/bootstrap/bootstrap.min.css';
import '../../assets/plugins/themify-icons/themify-icons.css';
import '../../assets/plugins/font-awesome/css/font-awesome.min.css';
import '../../assets/css/style.css';
import featureBg_2 from "../../assets/images/background-shape/feature-bg-2.png";
import greenDot from "../../assets/images/background-shape/green-dot.png";
import greenHalfCycle from "../../assets/images/background-shape/green-half-cycle.png";
import serviceHalfCycle from "../../assets/images/background-shape/service-half-cycle.png";
// import { useGlobalStore } from '../../helper/import';
import Footer from './footer.jsx';
import Navbar from './navbar';
function HomeLayout({ children, isIncludeAnimateIcon = true }) {
    // const [store, action] = useGlobalStore();
    // const { } = store;
    const [visitor, setVisitor] = useState({});
    useEffect(() => {
        window.$(window).scroll(function () {
            if (window.$('.navigation').offset().top > 100) {
                window.$('.navigation').addClass('nav-bg');
            } else {
                window.$('.navigation').removeClass('nav-bg');
            }
        });
        return () => {
            window.scrollTo(0, 0);
        }
    }, []);
    useEffect(() => {
        fetch("https://api.ipify.org?format=json").then(response => response.json()).then(data => {
            const visitorData = {
                clientIp: data.ip,
                userAgent: navigator.userAgent,
                appName: "Tool App",
                requestUrl: window.location.pathname,
                dateTime: new Date().toISOString()
            }
            setVisitor(visitorData);
        })
    }, [window.location.pathname]);
    useEffect(() => {
        if (!!visitor && Object.keys(visitor).length !== 0) {
            const host = window.location.hostname === 'localhost' ? 'http://127.0.0.1:4011' : 'https://ultinno.com/visitorapi';
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(visitor)
            };
            fetch(`${host}/visitor/add`, requestOptions).then(response => response.json()).then(data => console.log('response', data));
        }
    }, [visitor])
    return <>
        <ReactNotifications />
        <Navbar />
        {children}
        {isIncludeAnimateIcon &&
            <>
                <img className="tool-bg-1 up-down-animation" src={featureBg_2} alt="" />
                <img className="tool-bg-2 left-right-animation" src={greenHalfCycle} alt="" />
                <img className="tool-bg-3 up-down-animation" src={greenDot} alt="" />
                <img className="tool-bg-4 left-right-animation" src={serviceHalfCycle} alt="" />
                <img className="tool-bg-5 up-down-animation" src={featureBg_2} alt="" />
            </>
        }
        <Footer />
    </>
}
export default HomeLayout;