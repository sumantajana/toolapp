import host from '../config/host';
import session from './session';
let timeoutID;
const _debounce = (func, delay) => {
    let debounceTimer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
};
const _processLogout = () => {
    let ssoUrl = null;
    if (window.location.href.indexOf('localhost') !== -1)
        ssoUrl = host.development.sso;
    if (!!ssoUrl) {
        session.removeAll();
        window.location.href = ssoUrl;
    } else {
        return false;
    }
};
const _idleTimer = function (exitTime, goInactive) {
    function setup() {
        document.addEventListener("mousemove", resetTimer, false);
        document.addEventListener("mousedown", resetTimer, false);
        document.addEventListener("keypress", resetTimer, false);
        document.addEventListener("DOMMouseScroll", resetTimer, false);
        document.addEventListener("mousewheel", resetTimer, false);
        document.addEventListener("touchmove", resetTimer, false);
        document.addEventListener("MSPointerMove", resetTimer, false);
        startTimer();
    }
    setup();
    function startTimer() {
        timeoutID = window.setTimeout(goInactive, exitTime * 60000);
    }
    function resetTimer() {
        window.clearTimeout(timeoutID);
        startTimer();
    }
}
const _generatePaginationList = (currentPage, totalPage) => {
    let pagingList = [];
    if (totalPage <= 7)
        pagingList = _fillArray(totalPage)
    else {
        if (currentPage <= 3)
            pagingList = [..._fillArray(5), '...', totalPage]
        else if (currentPage >= totalPage - 3)
            pagingList = [1, '...', ..._fillArray(5, totalPage - 5)]
        else
            pagingList = [1, '...', ..._fillArray(3, currentPage - 2), '...', totalPage]
    }
    return ['Previous', ...pagingList, 'Next'];
}
const _fillArray = (N, start = 0) => Array.from({ length: N }, (_, index) => index + 1 + start);
const _sortCollection = (dataList, columnName, sortType = 'asc') => {
    return dataList.sort((data1, data2) => {
        let value1 = data1[columnName].toString().toLowerCase();
        let value2 = data2[columnName].toString().toLowerCase();
        if (value1 < value2) {
            return sortType === 'asc' ? -1 : 1;
        }
        if (value1 > value2) {
            return sortType === 'desc' ? -1 : 1;
        }
        return 0;
    });
}
function _camelCase(inputString, isUpperFirst = false) {
    return inputString.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 && !isUpperFirst ? word.toLowerCase() : word.toUpperCase();
    }).replace(/[&\/\\#, +()$~%.'":*?<>{}-]/g, '');
}
const _download = (content, fileName) => {
    const anchorNode = document.createElement('a');
    anchorNode.href = content;
    anchorNode.download = fileName;
    document.body.appendChild(anchorNode);
    anchorNode.click();
    document.body.removeChild(anchorNode);
}
const func = { _debounce, _processLogout, _idleTimer, _fillArray, _generatePaginationList, _sortCollection, _camelCase, _download }
export default func;