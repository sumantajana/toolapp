import axios from "axios";
import secure from "../../helper/secure";
class CommonAction {
    constructor() {
        this.dispatch = null;
    }
    setLoading(status) {
        return this.dispatch({ type: "SET_LOADING", payload: status });
    }
    async getUser() {
        this.setLoading(true);
        await axios.get(`https://jsonplaceholder.typicode.com/users/1`).then(response => {
            this.dispatch({ type: "SET_USER", payload: response.data });
        }).catch(error => {
            this.dispatch({ type: "SET_ERROR", payload: { error: true, message: error } });
        });
    }
    async getAuth() {
        this.setLoading(true);
        await axios({
            // headers: { 'Content-Type': 'application/json' },
            method: "POST",
            url: "http://127.0.0.1:4004/execute",
            responseType: 'json',
            data: { secureData: secure.encrypt({ "endpoint": "/auth/userLogin", "method": "POST", "postedData": { "loginWith": "email", "contact": "sumantajana.india@gmail.com", "password": "SJana#33" } }) }
        }).then(response => {
            this.dispatch({ type: "SET_USER", payload: response.data });
        }).catch(error => {
            this.dispatch({ type: "SET_ERROR", payload: { error: true, message: error } });
        });
    }
}
export default CommonAction;