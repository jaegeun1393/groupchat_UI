import React, { Component } from "react";

class GroupChatRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <div className="flex flex-1 h-screen w-[100%]">
                    <div className="container p-5">
                        <div className="max-w-full w-full h-full flex flex-col">
                            <div className="w-full h-full overflow-y-scroll">
                                {/* One set start */}
                                <div className="flex flex-row gap-2.5 items-center hover:bg-gray-50 cursor-pointer p-4">

                                    <div className="relative">
                                        <div
                                            className="overflow-hidden flex-grow-0 relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                            <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                    clipRule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <span
                                            className="absolute right-0 bottom-0 w-2.5 h-2.5 z-50 rounded-full bg-green-500"></span>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="text-sm flex justify-between items-start mb-0.5">
                                            <h5 className="text-[#475465] font-bold">Tony Soap</h5>
                                            <p className="text-gray-400 text-xs font-semibold"> <time>12:45</time> PM</p>
                                        </div>
                                        <div className="text-sm flex justify-between items-end">
                                            <p className="text-gray-400 text-xs">Lorem ipsum dolor sit amet...</p>
                                            <p
                                                className="bg-[#374557] w-5 h-5 flex justify-center items-center rounded-full text-slate-100">
                                                2</p>
                                        </div>
                                    </div>
                                </div>
                                {/* One set end */}

                                {/* One set start */}
                                <div className="flex flex-row gap-2.5 items-center hover:bg-gray-50 cursor-pointer p-4">

                                    <div className="relative">
                                        <div
                                            className="overflow-hidden flex-grow-0 relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                            <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                    clipRule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <span
                                            className="absolute right-0 bottom-0 w-2.5 h-2.5 z-50 rounded-full bg-green-500"></span>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="text-sm flex justify-between items-start mb-0.5">
                                            <h5 className="text-[#475465] font-bold">Tony Soap</h5>
                                            <p className="text-gray-400 text-xs font-semibold"> <time>12:45</time> PM</p>
                                        </div>
                                        <div className="text-sm flex justify-between items-end">
                                            <p className="text-gray-400 text-xs">Lorem ipsum dolor sit amet...</p>
                                            <p
                                                className="bg-[#374557] w-5 h-5 flex justify-center items-center rounded-full text-slate-100">
                                                2</p>
                                        </div>
                                    </div>
                                </div>
                                {/* One set end */}


                                {/* One set start */}
                                <div className="flex flex-row gap-2.5 items-center hover:bg-gray-50 cursor-pointer p-4">

                                    <div className="relative">
                                        <div
                                            className="overflow-hidden flex-grow-0 relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                            <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                    clipRule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <span
                                            className="absolute right-0 bottom-0 w-2.5 h-2.5 z-50 rounded-full bg-green-500"></span>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="text-sm flex justify-between items-start mb-0.5">
                                            <h5 className="text-[#475465] font-bold">Tony Soap</h5>
                                            <p className="text-gray-400 text-xs font-semibold"> <time>12:45</time> PM</p>
                                        </div>
                                        <div className="text-sm flex justify-between items-end">
                                            <p className="text-gray-400 text-xs">Lorem ipsum dolor sit amet...</p>

                                        </div>
                                    </div>
                                </div>
                                {/* One set end */}

                                <div className="flex flex-row gap-2.5 items-center hover:bg-gray-50 cursor-pointer p-4">

                                    <div className="relative">
                                        <div
                                            className="overflow-hidden flex-grow-0 relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                                            <svg className="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd"
                                                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                    clipRule="evenodd"></path>
                                            </svg>
                                        </div>
                                        <span
                                            className="absolute right-0 bottom-0 w-2.5 h-2.5 z-50 rounded-full bg-green-500"></span>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="text-sm flex justify-between items-start mb-0.5">
                                            <h5 className="text-[#475465] font-bold">Tony Soap</h5>
                                            <p className="text-gray-400 text-xs font-semibold"> <time>12:45</time> PM</p>
                                        </div>
                                        <div className="text-sm flex justify-between items-end">
                                            <p className="text-gray-400 text-xs">Lorem ipsum dolor sit amet...</p>
                                            <p
                                                className="bg-[#374557] w-5 h-5 flex justify-center items-center rounded-full text-slate-100">
                                                2</p>
                                        </div>
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

export default GroupChatRoom;