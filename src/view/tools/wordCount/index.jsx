import { useState } from 'react';
import ToolTemplate from '../template';
function WordCount(props) {
    const [text, setText] = useState("");
    let wordCount = 0, lowerCaseCount = 0, upperCaseCount = 0, numberCount = 0;
    if (text.length !== 0) {
        let temp = text;
        wordCount = temp.replace(/(^\s*)|(\s*$)/gi, "");
        wordCount = wordCount.replace(/[ ]{2,}/gi, " ");
        wordCount = wordCount.replace(/\n /, "\n");
        wordCount = wordCount.split(' ').length;
        lowerCaseCount = (text.match(/[a-z]/g) || []).length;
        upperCaseCount = (text.match(/[A-Z]/g) || []).length;
        numberCount = (text.match(/[0-9]/g) || []).length;
        // const countObject = temp.split("").reduce((prev, curr) => {
        //     if (!prev[curr]) prev[curr] = 0;
        //     prev[curr] += 1;
        //     return prev;
        // }, {});
    }
    return <ToolTemplate {...props}>
        <div className="row tool-bg p-5 rounded mb-5">
            <div className="col-lg-8 col-md-6 col-sm-6 mb-4">
                <div className="form-group">
                    <label for="stringBox">Enter Text</label>
                    <textarea className="form-control" value={text} onChange={event => setText(event.target.value)} id="stringBox" placeholder='Please Enter the Text here' rows="5"></textarea>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 mb-4 font-weight-bold">
                <div className="form-group mb-0">
                    <label className="col-form-label mr-1">Word Count:</label>
                    <span>{wordCount}</span>
                </div>
                <div className="form-group mb-0">
                    <label className="col-form-label mr-1">Character Count:</label>
                    <span>{text.length}</span>
                </div>
                <div className="form-group mb-0">
                    <label className="col-form-label mr-1">Lower Case Used:</label>
                    <span>{lowerCaseCount}</span>
                </div>
                <div className="form-group mb-0">
                    <label className="col-form-label mr-1">Upper Case Used:</label>
                    <span>{upperCaseCount}</span>
                </div>
                <div className="form-group mb-0">
                    <label className="col-form-label mr-1">Number Used:</label>
                    <span>{numberCount}</span>
                </div>
            </div>
        </div>
    </ToolTemplate >
}
export default WordCount;