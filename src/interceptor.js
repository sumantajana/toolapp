import { useEffect } from 'react';
import axios from 'axios';
let requestCount = 0;
function Interceptor() {
    useEffect(() => {
        axios.interceptors.request.use(config => {
            requestCount++;
            window.$(".progress-loader").show();
            return config;
        })
        axios.interceptors.response.use(response => {
            requestCount--;
            if (requestCount === 0)
                window.$(".progress-loader").hide();
            return response;
        })
    })
    return <div className="progress-loader"><div><div></div></div></div>
}
export default Interceptor;