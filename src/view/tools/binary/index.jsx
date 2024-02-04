import { useRef, useState } from 'react';
import HomeLayout from '../../layout/homeLayout';
// import './calculation';
// import './style.css';
function Binary(props) {
    return <HomeLayout {...props}>
        <section className="section-ml tool">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-title">QR Generator</h2>
                    </div>
                </div>
                <div className="row tool-bg p-5 rounded mb-5">
                    <div className="col-lg-12 col-md-12 col-sm-12 mb-4">
                        <div class="choose">
                            <p>First Number Input in :</p>
                            <form>
                                <label>
                                    <input class="ip" id="bin" type="radio" name="input" value="bin" onclick="setr();dis();disbutton();" />
                                    <span>Binary</span>
                                </label>
                                <label>
                                    <input class="ip" id="oct" type="radio" name="input" value="oct" onclick="setr();dis();disbutton();" />
                                    <span>Octal</span>
                                </label>
                                <label>
                                    <input class="ip" id="dec" type="radio" name="input" value="dec" onclick="setr();dis();disbutton();" />
                                    <span>Decimal</span>
                                </label>
                                <label>
                                    <input class="ip" id="hex" type="radio" name="input" value="hex" onclick="setr();dis();disbutton();" />
                                    <span>Hexa-decimal</span>
                                </label>
                            </form>
                            <p>Second Number Input in :</p>
                            <form>
                                <label>
                                    <input class="ip" id="opbin" type="radio" name="input" value="bin" />
                                    <span>Binary</span>
                                </label>
                                <label>
                                    <input class="ip" id="opoct" type="radio" name="input" value="oct" />
                                    <span>Octal</span>
                                </label>
                                <label>
                                    <input class="ip" id="opdec" type="radio" name="input" value="dec" />
                                    <span>Decimal</span>
                                </label>
                                <label>
                                    <input class="ip" id="ophex" type="radio" name="input" value="hex" />
                                    <span>Hexa-Decimal</span>
                                </label>
                            </form>
                            <p>Output in :</p>
                            <form>
                                <label>
                                    <input class="ip" id="fbin" type="radio" name="input" value="bin" />
                                    <span>Binary</span>
                                </label>
                                <label>
                                    <input class="ip" id="fdec" type="radio" name="input" value="oct" />
                                    <span>Octal</span>
                                </label>
                                <label>
                                    <input class="ip" id="foct" type="radio" name="input" value="dec" />
                                    <span>Decimal</span>
                                </label>
                                <label>
                                    <input class="ip" id="fhex" type="radio" name="input" value="hex" />
                                    <span>Hexa-Decimal</span>
                                </label>
                            </form>
                            <p>Operation to perform:</p>
                            <form>
                                <label>
                                    <input class="ip" id="add" type="radio" name="input" value="Add" />
                                    <span>Addition</span>
                                </label>
                                <label>
                                    <input class="ip" id="sub" type="radio" name="input" value="Subtract" />
                                    <span>Substraction</span>
                                </label>
                                <label>
                                    <input class="ip" id="mul" type="radio" name="input" value="Multiply" />
                                    <span>Multiplication</span>
                                </label>
                                <label>
                                    <input class="ip" id="div" type="radio" name="input" value="Divide" />
                                    <span>Division</span>
                                </label>
                            </form>
                        </div>
                        <br />
                        <form id="format">
                            <input class="box input" id="box1" type="text" placeholder="First Number" onclick="" /><br />
                            <input class="box input" id="box2" type="text" placeholder="Second Number" />
                        </form>
                        <form class="button">
                            <input type="button" class="clear" value="Submit" onclick="process();" />
                            <input type="button" class="clear" value="Clear" onclick="clr();" />
                        </form>
                        <div class="ans">
                            Answer &#61; <span id="ans"></span>
                        </div>
                        <br />
                        {/* <h1 class="title">Binary, Decimal and Hex Converter</h1>
                        <div class="container">
                            <div class="section">
                                <div class="heading">
                                    <h2 style={{ textAlign: "center" }}>Binary</h2>
                                </div>
                                <input type="text" name="binary" id="binary" />
                                <div class="btns">
                                    <button class="btn" id="bToD">To Decimal</button>
                                    <button class="btn" id="bToH">To Hex</button>
                                </div>
                                <span class="output selectable" id="bOutput"></span>
                            </div>
                            <div class="section">
                                <div class="heading">
                                    <h2 style={{ textAlign: "center" }}>Decimal</h2>
                                </div>
                                <input type="text" name="decimal" id="decimal" />
                                <div class="btns">
                                    <button class="btn" id="dToB">To Binary</button>
                                    <button class="btn" id="dToH">To Hex</button>
                                </div>
                                <span class="output selectable" id="dOutput"></span>
                            </div>
                            <div class="section">
                                <div class="heading">
                                    <h2 style={{ textAlign: "center" }}>Hexa-decimal</h2>
                                </div>
                                <input type="text" name="hexadecimal" id="hexadecimal" />
                                <div class="btns">
                                    <button class="btn" id="hToB">To Binary</button>
                                    <button class="btn" id="hToD">To Decimal</button>
                                </div>
                                <span class="output selectable" id="hOutput"></span>
                            </div>
                        </div> */}
                    </div>
                    {/* <div class='wrapper'>
                        <div class='content'>
                            <p class="fucking">Text(ASCII) to Binary Converter</p>
                            <div class='human'>
                                <p class="fucking-2">Text Input</p>
                                <div class='face'>
                                </div>
                                <div class='io' contenteditable='true'></div>
                            </div>
                            <div class='machine'>
                                <p class="fucking-2">Binary Output</p>
                                <div class='face'>
                                </div>
                                <div class='io' contenteditable='true'></div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    </HomeLayout >
}
export default Binary;