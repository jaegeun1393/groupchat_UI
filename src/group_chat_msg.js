import React, { Component } from "react";

class GroupChatMsg extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.closepanel = this.closepanel.bind(this);
    }

    closepanel(bol) {
        var main = document.getElementById("videochat");
        if (bol == "on") {
            main.className = "relative flex justify-center items-center";
        } else {
            main.className = "relative flex justify-center items-center hidden";
        }
    }

    render() {
        return (
            <>
                <section
                    className=" max-h-full w-full h-full flex flex-col bg-white rounded-lg rounded-tl-none rounded-bl-none border-b-2 border-gray-200">
                    <div className="flex justify-start items-center gap-3 p-6 border-b-2 border-gray-200">
                        <div
                            className="overflow-hidden flex-grow-0 relative w-12 h-12 bg-gray-100 rounded-full dark:bg-gray-600">
                            <svg className="absolute -bottom-1 w-12 h-12 text-gray-400" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </div>
                        <h5 className="font-bold text-[#475465] text-base">Tony Soap</h5>
                    </div>

                    <div className="p-6 overflow-y-scroll h-full max-h-full w-full">

                        <div className="flex justify-start mb-3">
                            <div>
                                <div className="flex flex-col gap-2 text-left space-y-5 ">
                                    <div>
                                        <span className="text-sm p-3 rounded-xl bg-[#F4F4F5] text-[#626a75]">
                                            Hi....
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-sm p-3 rounded-xl bg-[#F4F4F5] text-[#626a75]">
                                            Hi....
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-sm p-3 rounded-xl bg-[#F4F4F5] text-[#626a75]">
                                            Hello Nabila!
                                        </span>
                                    </div>
                                    <div className="text-sm p-3 rounded-xl rounded-bl-none bg-[#F4F4F5] text-[#626a75]">
                                        <span>
                                            Can I see your history lesson homework?
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-left text-xs font-semibold my-2"> <time>12:45</time>
                                    PM </p>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <div>
                                <div className="flex flex-col gap-2 text-right space-y-5">
                                    <div>
                                        <span className="text-sm p-3 rounded-xl bg-[#374557] text-[#F4F4F5]">
                                            Hello Nabila!
                                        </span>
                                    </div>
                                    <div
                                        className="text-sm p-3 max-w-[250px] rounded-xl rounded-br-none bg-[#374557] text-[#F4F4F5]">
                                        <span>
                                            I'm not finished yet, why don't work together to finish homework?
                                        </span>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-right text-xs font-semibold my-2"> <time>12:45</time>
                                    PM </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-5">
                        <div className="relative">
                            <input type="search" id="default-search"
                                className="block p-4 pl-10 w-full text-sm text-gray-900 bg-white rounded-full border-2 border-gray-300 outline-none"
                                placeholder="Write your message..." required="" />
                            <div className="absolute top-2.5 right-2.5 flex gap-4 items-center">
                                <button onClick={() => this.closepanel("on")}>
                                    <svg width="24px" height="24px" viewBox="0 0 24 24" id="call" xmlns="http://www.w3.org/2000/svg">
                                        <rect id="Rectangle_4" width="24" height="24" fill="none" />
                                        <path id="Shape" d="M7.02,15.976,5.746,13.381a.7.7,0,0,0-.579-.407l-1.032-.056a.662.662,0,0,1-.579-.437,9.327,9.327,0,0,1,0-6.5.662.662,0,0,1,.579-.437l1.032-.109a.7.7,0,0,0,.589-.394L7.03,2.446l.331-.662a.708.708,0,0,0,.07-.308.692.692,0,0,0-.179-.467A3,3,0,0,0,4.693.017l-.235.03L4.336.063A1.556,1.556,0,0,0,4.17.089l-.162.04C1.857.679.165,4.207,0,8.585V9.83c.165,4.372,1.857,7.9,4,8.483l.162.04a1.556,1.556,0,0,0,.165.026l.122.017.235.03a3,3,0,0,0,2.558-.993.692.692,0,0,0,.179-.467.708.708,0,0,0-.07-.308Z" transform="translate(3.887 6.093) rotate(-30)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="1.5" />
                                    </svg>
                                </button>

                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"
                                        height="24">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                            d="M17.657 14.828l-1.414-1.414L17.657 12A4 4 0 1 0 12 6.343l-1.414 1.414-1.414-1.414 1.414-1.414a6 6 0 0 1 8.485 8.485l-1.414 1.414zm-2.829 2.829l-1.414 1.414a6 6 0 1 1-8.485-8.485l1.414-1.414 1.414 1.414L6.343 12A4 4 0 1 0 12 17.657l1.414-1.414 1.414 1.414zm0-9.9l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"
                                            fill="rgba(115,121,122,1)" />
                                    </svg>
                                </button>

                                <button type="button" className="text-white bg-[#374557] hover:bg-[#2e3a49] font-medium rounded-full text-sm px-4 py-2
                                     text-center inline-flex items-center outline-none">
                                    Send
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22"
                                        height="18">
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path
                                            d="M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V13z"
                                            fill="rgba(236,240,241,1)" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="hidden relative flex justify-center items-center" id="videochat">
                    <div id="menu" className="left-0 w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0">
                        <div className="2xl:container 2xl:mx-auto py-28 px-4 md:px-28 flex justify-center items-center">
                            <div className="dark:bg-gray-800 relative justify-center items-center bg-white rounded-3xl w-[800px]">
                                <h1 className="text-center text-4xl font-bold pt-[15px]">Audio / Video Check</h1>
                                <p className="text-center content-center ml-[150px] mr-[150px] text-xl pt-[30px]">Unable to Access Media Seems like you denied permission to use audio and video.
                                    Please grant permission to the browser to access microphone and camera.
                                </p>
                                <div className="flex flex-col pt-[40px] shrink-0">
                                    <div className="flex flex-rows-2 justify-center content-center">
                                        <div className="p-[20px] rounded-l-2xl border-solid border-2 border-slate-700">
                                            <svg fill="currentColor" viewBox="0 0 16 16" height="35px" width="35px">
                                                <path d="M9 4a1 1 0 11-2 0 1 1 0 012 0zm-2.5 6.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                                                <path d="M4 0a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V2a2 2 0 00-2-2H4zm6 4a2 2 0 11-4 0 2 2 0 014 0zM8 7a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
                                            </svg>
                                        </div>
                                        <div className="p-6 font-bold text-xl rounded-r-2xl border-solid border-2 border-slate-700">
                                            System default audio output
                                        </div>
                                    </div>

                                    <div className="flex flex-rows-2 justify-center content-center pt-4">
                                        <div className="p-[20px] rounded-l-2xl border-solid border-2 border-slate-700">
                                            <svg fill="currentColor" viewBox="0 0 16 16" height="35px" width="35px">
                                                <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4.02 4.02 0 0012 8V7a.5.5 0 011 0v1zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a4.973 4.973 0 01-2.43.923V15h3a.5.5 0 010 1h-7a.5.5 0 010-1h3v-2.025A5 5 0 013 8V7a.5.5 0 011 0v1a4 4 0 004 4zm3-9v4.879L5.158 2.037A3.001 3.001 0 0111 3z" />
                                                <path d="M9.486 10.607L5 6.12V8a3 3 0 004.486 2.607zm-7.84-9.253l12 12 .708-.708-12-12-.708.708z" />
                                            </svg>
                                        </div>
                                        <div className="p-6 font-bold text-xl rounded-r-2xl border-solid border-2 border-slate-700">
                                            Make sure camera is off before start
                                        </div>
                                    </div>

                                    <div className="flex flex-rows-2 justify-center content-center pt-4 pb-4">
                                        <div className="p-[20px] rounded-l-2xl border-solid border-2 border-slate-700">
                                            <svg fill="currentColor" viewBox="0 0 16 16" height="35px" width="35px"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.961 12.365a1.99 1.99 0 00.522-1.103l3.11 1.382A1 1 0 0016 11.731V4.269a1 1 0 00-1.406-.913l-3.111 1.382A2 2 0 009.5 3H4.272l6.69 9.365zm-10.114-9A2.001 2.001 0 000 5v6a2 2 0 002 2h5.728L.847 3.366zm9.746 11.925l-10-14 .814-.58 10 14-.814.58z"
                                                />
                                            </svg>
                                        </div>
                                        <div className="p-6 font-bold text-xl rounded-r-2xl border-solid border-2 border-slate-700">
                                            Make sure mike is off before start
                                        </div>
                                    </div>


                                    <div className="flex flex-row justify-center content-center">
                                        <button onClick={() => this.closepanel("off")} className="mb-[20px] pb-[10px] pt-[10px] pr-[80px] pl-[80px] text-white bg-slate-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >Start the call</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default GroupChatMsg;