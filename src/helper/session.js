import secure from "./secure";
const session = {
    set: (name, data) => {
        sessionStorage.setItem(btoa(name), secure.encrypt(data));
    },
    get: (name, isFlashdata = false) => {
        let storedData = sessionStorage.getItem(btoa(name))
        if (isFlashdata) sessionStorage.removeItem(btoa(name));
        return !!storedData ? secure.decrypt(storedData) : null;
    },
    remove: (name) => sessionStorage.removeItem(btoa(name)),
    setSecret: (name, data) => {
        sessionStorage.setItem(secure.encrypt(name), secure.encrypt(data));
    },
    getSecret: (name, isFlashdata = false) => {
        let storedData = null;
        const allSession = Object.keys(sessionStorage);
        for (let i = 0; i < allSession.length; i++) {
            if (secure.decrypt(allSession[i]) === name) {
                storedData = sessionStorage.getItem(allSession[i])
                if (isFlashdata)
                    sessionStorage.removeItem(allSession[i]);
                break;
            }
        }
        return !!storedData ? secure.decrypt(storedData) : null;
    },
    removeSecret: (name) => {
        const allSession = Object.keys(sessionStorage);
        for (let i = 0; i < allSession.length; i++) {
            if (secure.decrypt(allSession[i]) === name) {
                sessionStorage.removeItem(allSession[i]);
                break;
            }
        }
    },
    removeAll: () => sessionStorage.clear()
}
export default session;