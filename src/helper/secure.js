const CryptoJS = require("crypto-js");
const SECRET_KEY = '6jHna8jsbKA7UJgu90LOkJioYH87';
const secure = {
    encrypt: function (data) {
        return CryptoJS.AES.encrypt(typeof data === 'object' ? JSON.stringify(data) : data, SECRET_KEY).toString();
    },
    decrypt: function (cipherText) {
        const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
        const data = bytes.toString(CryptoJS.enc.Utf8);
        try {
            return JSON.parse(data);
        } catch (e) {
            return data;
        }
    }
}
export default secure;