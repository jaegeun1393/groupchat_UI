import React, { Component } from "react";

class GroupChatMsg extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
                        <form>
                            <div className="relative">
                                <input type="search" id="default-search"
                                    className="block p-4 pl-10 w-full text-sm text-gray-900 bg-white rounded-full border-2 border-gray-300 outline-none"
                                    placeholder="Write your message..." required="" />
                                <div className="absolute top-2.5 right-2.5 flex gap-4 items-center">

                                    <button>
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M11 17H4C2.34315 17 1 15.6569 1 14V6C1 4.34315 2.34315 3 4 3H20C21.6569 3 23 4.34315 23 6V14C23 15.6569 21.6569 17 20 17H13V19H16C16.5523 19 17 19.4477 17 20C17 20.5523 16.5523 21 16 21H8C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19H11V17ZM4 5H20C20.5523 5 21 5.44772 21 6V14C21 14.5523 20.5523 15 20 15H4C3.44772 15 3 14.5523 3 14V6C3 5.44772 3.44772 5 4 5Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                    </button>

                                    <button>
                                        <svg width="24px" height="24px" viewBox="0 0 24 24" id="call" xmlns="http://www.w3.org/2000/svg">
                                            <rect id="Rectangle_4" data-name="Rectangle 4" width="24" height="24" fill="none" />
                                            <path id="Shape" d="M7.02,15.976,5.746,13.381a.7.7,0,0,0-.579-.407l-1.032-.056a.662.662,0,0,1-.579-.437,9.327,9.327,0,0,1,0-6.5.662.662,0,0,1,.579-.437l1.032-.109a.7.7,0,0,0,.589-.394L7.03,2.446l.331-.662a.708.708,0,0,0,.07-.308.692.692,0,0,0-.179-.467A3,3,0,0,0,4.693.017l-.235.03L4.336.063A1.556,1.556,0,0,0,4.17.089l-.162.04C1.857.679.165,4.207,0,8.585V9.83c.165,4.372,1.857,7.9,4,8.483l.162.04a1.556,1.556,0,0,0,.165.026l.122.017.235.03a3,3,0,0,0,2.558-.993.692.692,0,0,0,.179-.467.708.708,0,0,0-.07-.308Z" transform="translate(3.887 6.093) rotate(-30)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5" />
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
                        </form>
                    </div>
                </section>
            </>
        );
    }
}

export default GroupChatMsg;