import React from 'react';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.min.js';
import HomeIndex from './view/home/homeIndex';
import Page404 from './view/layout/404';
import Interceptor from './interceptor';
import Tools from './view/tools/homeIndex';
import * as AllTools from './view/tools';
import toolsData from './view/tools/data.json';
import PrivacyPolicy from './view/privacyPolicy';
import ContactUs from './view/contactUs';
import AboutUs from './view/about';
import { func } from './helper/import';
import BirthdayWish from './view/tools/birthdayWisher/birthdayWish';
function Application() {
    return <>
        <Interceptor />
        <Routes>
            <Route path="/" exact element={<HomeIndex />} />
            <Route path="/tools" exact element={<Tools isIncludeLayout={true} />} />
            <Route exact path='/birthday/:name?/:month?/:day?' element={<BirthdayWish />} />
            {toolsData.map(dt => {
                if (!!dt.link) {
                    const ToolJSX = AllTools[func._camelCase(dt.link, true)];
                    return <Route path={`/tools/${dt.link}`} exact element={<ToolJSX {...dt} />} />
                } else return null
            })}
            <Route path="/about" exact element={<AboutUs />} />
            <Route path="/contact" exact element={<ContactUs />} />
            <Route path="/privacy-policy" exact element={<PrivacyPolicy />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    </>
}
export default Application;